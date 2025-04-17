



    const ctx = document.getElementById('myPieChart').getContext('2d');
    let retries = 10;
    let voteMap;

    

    window.addEventListener('load', async () => {
    while (!contract && retries > 0) {
      await new Promise(res => setTimeout(res, 300)); // wait 300ms
      retries--;
    }
  
    if (contract) {
      voteMap = await window.loadVotes();
      // Use `votes` here...
    
    let total = 0;
    let candidate_arr = [];
    let vote_arr = [];
    let colors = ['rgba(255, 0,0, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(0,0,255, 0.7)'];
    let background = [];
    
    for (const [name, voteCount] of voteMap) {
      
      candidate_arr.push(name);
      vote_arr.push(voteCount);
      background.push(colors[total % colors.length]);  // This ensures colors loop around
      total++;

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
    viewWinner();
    

  
  } else {
    console.error("Contract still not initialized after waiting.");
  }
    });

