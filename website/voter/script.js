
document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="candidate"]:checked');
    const message = document.getElementById('popupMessage');
    if (selected) {
      message.textContent = `You voted for ${selected.value}`;
    } else {
      message.textContent = 'Please select a candidate before submitting.';
    }
    document.getElementById('popup').style.display = 'block';
  });

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }