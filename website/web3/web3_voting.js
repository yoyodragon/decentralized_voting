let web3;
let contract;
const contractAddress = '0x8cF1596a193d99d117839a6e3b35ED6b8F361e09';
const abi = 
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "CandidateAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "CandidateRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "candidateIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cycle",
				"type": "uint256"
			}
		],
		"name": "VoteCast",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cycle",
				"type": "uint256"
			}
		],
		"name": "VotingStarted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cycle",
				"type": "uint256"
			}
		],
		"name": "VotingStopped",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cycle",
				"type": "uint256"
			}
		],
		"name": "WinnerDeclared",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "chairperson",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentCycle",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "declareWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCandidates",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "login",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "removeCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stopVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewWinner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "candidateIndex",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "registered",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winnerDeclared",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winningCandidateIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        contract = new web3.eth.Contract(abi, contractAddress);

        try {
            const chair = await contract.methods.chairperson().call();
            
        } catch (err) {
            console.error('Error getting chairperson:', err);
            
        }

    } else {
        alert("Please install MetaMask to use this DApp.");
    }
});

async function getAccount() {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
}

async function addCandidate() {
    const name = document.getElementById("candidateName").value;
    const account = await getAccount();
    await contract.methods.addCandidate(name).send({ from: account });
}

async function removeCandidate() {
    const index = document.getElementById("removeIndex").value;
    const account = await getAccount();
    await contract.methods.removeCandidate(index).send({ from: account });
}

async function startVoting() {
    const account = await getAccount();
    await contract.methods.startVoting().send({ from: account });
}

async function stopVoting() {
    const account = await getAccount();
    await contract.methods.stopVoting().send({ from: account });
}

async function register() {
    const account = await getAccount();
    await contract.methods.register().send({ from: account });
}

async function login() {
    
    const account = await getAccount();
    console.log(account);
    try {
        const result = await contract.methods.login().call({ from: account });
        //window.location.href = "../voter/main.html";
        
    } catch (err) {
        alert("Not registered");
    }
}

async function vote(index) {
    
    const account = await getAccount();
    await contract.methods.vote(index).send({ from: account });
    return 1;
}

async function declareWinner() {
    const account = await getAccount();
    await contract.methods.declareWinner().send({ from: account });
}

async function viewWinner() {
    try {
        const result = await contract.methods.viewWinner().call();
        document.getElementById("winnerDisplay").innerText = `Winner: ${result[0]}, Votes: ${result[1]}`;
    } catch {
        document.getElementById("winnerDisplay").innerText = "Winner not declared yet.";
    }
}

async function getAllCandidates() {
    const candidateList = [];
    let index = 0;

    while (true) {
        try {
            const candidate = await contract.methods.candidates(index).call();
            candidateList.push(candidate);
            index++;
        } catch (error) {
            // Reached the end of the candidates array
            break;
        }
    }

    if (candidateList.length === 0) {
        console.log("No candidates found.");
        return;
    }

    console.log("Candidates and Votes:");
    candidateList.forEach((c, i) => {
        console.log(`Index ${i}: ${c.name} - Votes: ${c.voteCount}`);
    });

    // Optional: Display on page
    let output = "<ul>";
    candidateList.forEach((c, i) => {
        output += `<li>Index ${i}: ${c.name} - Votes: ${c.voteCount}</li>`;
    });
    output += "</ul>";
    document.getElementById("winnerDisplay").innerHTML = output;
}