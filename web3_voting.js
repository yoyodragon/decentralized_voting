let web3;
let contract;


window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const response = await fetch('https://yoyodragon.github.io/decentralized_voting/address.json');
		const {address, abi} = await response.json();
		contract = new web3.eth.Contract(abi, address);

		if (contract) {
            console.log("Contract initialized successfully:", contract);
        } else {
            console.error("Contract is not initialized.");
        }

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
	const accounts = await web3.eth.getAccounts();
	const account = accounts[0];
	console.log(contract.methods.register);
    await contract.methods.register().send({ from: account });
	
}

async function login() {
    
    const account = await getAccount();
    console.log(account);
    try {
        const result = await contract.methods.login().call({ from: account });
        window.location.href = "website\\voter\\main.html";
        
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

// async function getAllCandidates() {
//     const candidateList = [];
//     let index = 0;

//     while (true) {
//         try {
// 			(async () => {
// 				try {
// 				  const candidate = await contract.methods.candidates(0).call();
// 				  console.log("Candidate at index 0:", candidate);
// 				} catch (err) {
// 				  console.error("Error fetching candidate:", err.message);
// 				}
// 			  })();
//             const candidate = await contract.methods.candidates(index).call();
//             candidateList.push(candidate);
// 			console.log(candidate);
//             index++;
//         } catch (error) {
//             // Reached the end of the candidates array
//             break;
//         }
//     }

//     if (candidateList.length === 0) {
//         console.log("No candidates found.");
        
//     }
	
//     console.log("Candidates and Votes:");
//     candidateList.forEach((c, i) => {
//         console.log(`Index ${i}: ${c.name} - Votes: ${c.voteCount}`);
//     });

//     // Optional: Display on page
// 	return candidateList;
    
// }

async function loadVotes() {
	console.log("Loaded contract:", contract);
	if (window.ethereum ) {
	  

	  try {
		const result = await contract.methods.getLiveVoteCount().call();
		console.log("getLiveVoteCount result:", result);
  
		const names = result[0];
		const votes = result[1];

		const voteMap = new Map();
		for (let i = 0; i < names.length; i++) {
		  voteMap.set(names[i], parseInt(votes[i]));
		}

		let displayText = "";
		voteMap.forEach((votes, name) => {
		  displayText += `${name}: ${votes} votes\n`;
		});

		console.log(displayText);
		return voteMap;
	  } catch (err) {
		console.log("Error fetching votes: " + err);
		return new Map();
	  }
	} else {
	  alert("Please install MetaMask to use this feature.");
	  return new Map();
	}
  }
  
window.loadVotes = loadVotes;
  

  

