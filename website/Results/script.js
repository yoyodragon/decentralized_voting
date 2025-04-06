function goBack() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    let storedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];

    let candidateNames = storedCandidates.map(c => c.name);
    let votes = storedCandidates.map(c => c.votes || 0);

    let ctx = document.getElementById("resultsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: candidateNames,
            datasets: [{
                label: "Votes",
                data: votes,
                backgroundColor: "aquamarine",
                borderColor: "black",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            }
        }
    });
});
