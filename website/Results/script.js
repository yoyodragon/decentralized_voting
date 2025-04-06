function goBack() {
    window.location.href = "index.html";
}



    const ctx = document.getElementById('myPieChart').getContext('2d');

    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue'],
        datasets: [{
          label: 'Votes',
          data: [12, 19],
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
  



