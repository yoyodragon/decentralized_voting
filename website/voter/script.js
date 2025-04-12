
document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var selected = document.querySelector('input[name="candidate"]:checked');
    const message = document.getElementById('popupMessage');
    if (selected) {
      message.textContent = `You voted for ${selected.value}`;
      if (selected.value == "Candidate 1"){
        vote(0);
      }
      else if (selected.value == "Candidate 1"){
        vote(1);

        
      }
      

      
      var link = selected;
    } else {
      message.textContent = 'Please select a candidate before submitting.';
    }
    document.getElementById('popup').style.display = 'block';
  });

  function closePopup() {
    var selected = document.querySelector('input[name="candidate"]:checked');

    if (selected){
      window.location.href='..\\Results\\main.html';
    }
    
    document.getElementById('popup').style.display = 'none';
  }