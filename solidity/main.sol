// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract VotingSystem {
    struct Candidate {
        string name; // Candidate's name
        uint voteCount;
    }

    struct Voter {
        bool registered;
        bool voted;
        uint vote;
    }

    address public chairperson;
    bool public votingActive = false;
    Candidate[] public candidates;
    mapping(address => Voter) public voters;
    uint public winningCandidateIndex;
    bool public winnerDeclared = false;

    // Events
    event CandidateAdded(string name);
    event CandidateRemoved(uint index);
    event VotingStarted();
    event VotingStopped();
    event VoteCast(address voter, uint candidateIndex);
    event WinnerDeclared(string name, uint voteCount);

    constructor() {
        chairperson = msg.sender;
    }

    function addCandidate(string memory name) public {
        require(msg.sender == chairperson, "Only the chairperson can add candidates.");
        require(!votingActive, "Cannot add candidates after voting starts.");
        candidates.push(Candidate(name, 0));
        emit CandidateAdded(name);
    }

    function removeCandidate(uint index) public {
        require(msg.sender == chairperson, "Only the chairperson can remove candidates.");
        require(!votingActive, "Cannot remove candidates after voting starts.");
        require(index < candidates.length, "Invalid candidate index.");
        
        candidates[index] = candidates[candidates.length - 1];
        candidates.pop();
        emit CandidateRemoved(index);
    }

    function startVoting() public {
        require(msg.sender == chairperson, "Only the chairperson can start voting.");
        require(!votingActive, "Voting already started.");
        require(candidates.length > 0, "No candidates available.");
        votingActive = true;
        winnerDeclared = false;
        emit VotingStarted();
    }

    function stopVoting() public {
        require(msg.sender == chairperson, "Only the chairperson can stop voting.");
        require(votingActive, "Voting is not active.");
        votingActive = false;
        emit VotingStopped();
    }

    function register() public {
        require(!votingActive, "Registration closed. Voting has started.");
        require(!voters[msg.sender].registered, "You are already registered.");
        
        voters[msg.sender].registered = true;
    }

    function login() public view returns (string memory) {
        require(voters[msg.sender].registered, "You are not registered.");
        return "Login successful";
    }

    function vote(uint candidateIndex) public {
        require(voters[msg.sender].registered, "You are not registered.");
        require(votingActive, "Voting is not active.");
        require(!voters[msg.sender].voted, "You have already voted.");
        require(candidateIndex < candidates.length, "Invalid candidate index.");

        voters[msg.sender].voted = true;
        voters[msg.sender].vote = candidateIndex;
        candidates[candidateIndex].voteCount++;

        emit VoteCast(msg.sender, candidateIndex);
    }

    function declareWinner() public {
        require(msg.sender == chairperson, "Only the chairperson can declare the winner.");
        require(!votingActive, "Voting must be stopped first.");
        require(!winnerDeclared, "Winner has already been declared.");
        
        uint winningVoteCount = 0;
        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > winningVoteCount) {
                winningVoteCount = candidates[i].voteCount;
                winningCandidateIndex = i;
            }
        }
        winnerDeclared = true;
        emit WinnerDeclared(candidates[winningCandidateIndex].name, winningVoteCount);
    }

    function viewWinner() public view returns (string memory, uint) {
        require(winnerDeclared, "Winner has not been declared yet.");
        return (candidates[winningCandidateIndex].name, candidates[winningCandidateIndex].voteCount);
    }

    // ✅ New Function: See Live Vote Count
    function getLiveVoteCount() public view returns (string[] memory, uint[] memory) {
        string[] memory names = new string[](candidates.length);
        uint[] memory votes = new uint[](candidates.length);

        for (uint i = 0; i < candidates.length; i++) {
            names[i] = candidates[i].name;
            votes[i] = candidates[i].voteCount;
        }

        return (names, votes);
    }
}