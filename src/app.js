document.getElementById('load-data').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const data = JSON.parse(event.target.result);
        visualizeData(data);
    };

    if (file) {
        reader.readAsText(file);
    }
});

function visualizeData(data) {
    const ctx = document.getElementById('data-chart').getContext('2d');
    // Placeholder for data visualization logic (e.g., using Chart.js)
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Données de santé',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}