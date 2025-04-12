function goBack() {
    window.location.href = "index.html";
}



    const ctx = document.getElementById('myPieChart').getContext('2d');
    getAllCandidates();
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Candidate 1', 'Candidate 2'],
        datasets: [{
          label: 'Votes',
          data: [1, 0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            
          ],
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
  



