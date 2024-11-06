window.initializePaymentChart = (monthlyPaymentStatus) => {
    console.log(Chart);  // This should log the Chart object if Chart.js is loaded correctly.
    const ctx = document.getElementById('monthlyPaymentChart').getContext('2d');
    const labels = monthlyPaymentStatus.map(month => month.MonthName);
    const data = monthlyPaymentStatus.map(month => month.IsPaid ? 1 : 0);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Payment Status (1 = Done, 0 = Pending)',
                data: data,
                backgroundColor: data.map(status => status ? 'green' : 'red')
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
};
