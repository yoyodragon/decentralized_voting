
// document.getElementById('voteForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     var selected = document.querySelector('input[name="candidate"]:checked');
//     const message = document.getElementById('popupMessage');
//     if (selected) {
//       message.textContent = `You voted for ${selected.value}`;
//       if (selected.value == "Candidate 1"){
//         vote(0);
//       }
//       else if (selected.value == "Candidate 1"){
//         vote(1);

        
//       }
      

      
//       var link = selected;
//     } else {
//       message.textContent = 'Please select a candidate before submitting.';
//     }
//     document.getElementById('popup').style.display = 'block';
//   });

  function closePopup() {
    var selected = document.querySelector('input[name="candidate"]:checked');

    if (selected){
      window.location.href='..\\Results\\main.html';
    }
    
    document.getElementById('popup').style.display = 'none';
  }











  






  let candidateMap = new Map();
  // Map of candidates to vote counts

  window.addEventListener('load', async () => {
    // Wait until contract is initialized
    let retries = 10;
    while (!contract && retries > 0) {
      await new Promise(res => setTimeout(res, 300)); // wait 300ms
      retries--;
    }
  
    if (contract) {
      candidateMap = await window.loadVotes();
      // Use `votes` here...
    } else {
      console.error("Contract still not initialized after waiting.");
    }




    const candidatesDiv = document.getElementById("candidatesDiv");
  const defaultImg = "OIP.png";
  
  // Render candidate cards
  candidateMap.forEach((_, name) => {
    const label = document.createElement("label");
    label.className = "candidate";

    const img = document.createElement("img");
    img.src = defaultImg;
    img.alt = name;

    const nameEl = document.createElement("h3");
    nameEl.textContent = name;

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "candidate";
    radio.value = name;

    label.appendChild(img);
    label.appendChild(nameEl);
    label.appendChild(radio);

    candidatesDiv.appendChild(label);
  });

  document.getElementById("voteForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const selected = document.querySelector('input[name="candidate"]:checked');
    if (selected) {
      const candidate = selected.value;
      candidateMap.set(candidate, candidateMap.get(candidate) + 1);
      
      var i = 0;
      for (const[key,value] of candidateMap){
          if (key == candidate){
              vote(i);
          }
          i = i+1;
      }
      alert("You voted for: " + candidate + "\nTotal votes for " + candidate + ": " + candidateMap.get(candidate));
      window.location.href='..\\Results\\main.html';
    } else {
      alert("Please select a candidate before submitting.");
    }
  });

  function goToResults() {
    alert("You will be redirected to the results page (functionality not implemented).");
    // Example: window.location.href = "results.html";
  }
  });

  