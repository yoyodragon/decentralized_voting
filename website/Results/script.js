function goBack() {
    window.location.href = "index.html";
}



    const ctx = document.getElementById('myPieChart').getContext('2d');
    const votes = await window.loadVotes();
    let total = 0;
    let candidate_arr = [];
    let vote_arr = [];
    let colors = ['rgba(255, 0,0, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(0,0,255, 0.7)'];
    let background = [];
    for (const [name, voteCount] of voteMap) {
      background[total] = colors[total];
      total = total + 1;
    }
    for (const [name, voteCount] of voteMap) {
      
      candidate_arr.push(name);
      vote_arr.push(voteCount);

    }
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: candidate_arr,
        datasets: [{
          label: 'Votes',
          data: vote_arr,
          backgroundColor: background,
          borderColor: [
            'white'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true
      }
    });
  



