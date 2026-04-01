// Common Chart Defaults
Chart.defaults.font.family = "'Segoe UI', 'Arial', sans-serif";
Chart.defaults.color = '#555';

// Store chart instances
let charts = {};

function initCharts() {
    // 1. Fat Content Donut Chart
    const ctxFatContent = document.getElementById('fatContentChart').getContext('2d');
    charts.fatContent = new Chart(ctxFatContent, {
        type: 'doughnut',
        data: {
            labels: ['Low Fat', 'Regular', 'LF', 'reg'],
            datasets: [{
                data: [409, 732, 44, 25],
                backgroundColor: ['#fec800', '#4caf50', '#03a9f4', '#1a237e'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
            plugins: {
                legend: { display: false },
                datalabels: { display: false }
            }
        },
        plugins: [{
            id: 'centerText',
            beforeDraw: function(chart) {
                var width = chart.width, height = chart.height, ctx = chart.ctx;
                ctx.restore();
                var fontSize = (height / 114).toFixed(2);
                ctx.font = "bold " + fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                // Get value dynamically or mock it
                var text = "$" + (chart.data.datasets[0].data.reduce((a, b) => a + b, 0) / 1210).toFixed(1) + "M",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2 - 10;
                ctx.fillText(text, textX, textY);
                
                ctx.font = "normal " + (fontSize*0.5).toFixed(2) + "em sans-serif";
                var text2 = "Total...",
                    text2X = Math.round((width - ctx.measureText(text2).width) / 2),
                    text2Y = height / 2 + 15;
                ctx.fillText(text2, text2X, text2Y);
                ctx.save();
            }
        }]
    });

    // 2. Fat By Outlet Stacked Bar Chart
    const ctxFatByOutlet = document.getElementById('fatByOutletChart').getContext('2d');
    charts.fatByOutlet = new Chart(ctxFatByOutlet, {
        type: 'bar',
        data: {
            labels: ['Tier 3', 'Tier 2', 'Tier 1'],
            datasets: [
                { label: 'Low Fat', data: [0.29, 0.24, 0.20], backgroundColor: '#ff5722' },
                { label: 'Regular', data: [0.16, 0.13, 0.12], backgroundColor: '#fec800' },
                { label: 'LF', data: [0.02, 0.01, 0.01], backgroundColor: '#1a237e' },
                { label: 'reg', data: [0.01, 0.00, 0.01], backgroundColor: '#2196f3' }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, display: false },
                y: { stacked: true, grid: { display: false }, border: {display: false} }
            },
            plugins: { legend: { display: false } }
        }
    });

    // 3. Item Type Horizontal Bar Chart
    const ctxItemType = document.getElementById('itemTypeChart').getContext('2d');
    charts.itemType = new Chart(ctxItemType, {
        type: 'bar',
        data: {
            labels: ['Fruits...', 'Snack F...', 'Househ...', 'Frozen...', 'Dairy', 'Canned', 'Baking...', 'Health...', 'Meat', 'Soft Dri...', 'Breads', 'Hard Dr...', 'Others', 'Starchy...', 'Breakfast', 'Seafood'],
            datasets: [{
                data: [0.18, 0.18, 0.14, 0.12, 0.10, 0.09, 0.08, 0.07, 0.06, 0.06, 0.04, 0.03, 0.02, 0.02, 0.02, 0.01],
                backgroundColor: '#fec800',
                barPercentage: 0.7
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { display: false, grid: { display: false } },
                y: { grid: { display: false }, border: {display: false} }
            },
            plugins: { legend: { display: false }, datalabels: { display: false } }
        }
    });

    // 4. Outlet Establishment Line Chart
    const ctxOutletEstab = document.getElementById('outletEstablishmentChart').getContext('2d');
    charts.outletEstab = new Chart(ctxOutletEstab, {
        type: 'line',
        data: {
            labels: ['2010', '2012', '2014', '2015', '2018', '2020'],
            datasets: [{
                data: [0.08, 0.13, 0.13, 0.13, 0.20, 0.13],
                backgroundColor: 'rgba(254, 200, 0, 0.6)',
                borderColor: '#333',
                borderWidth: 2,
                pointBackgroundColor: '#333',
                pointRadius: 4,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false } },
                y: {
                    min: 0, max: 0.25,
                    grid: {color: '#eee'}, border: {display: false},
                    ticks: { callback: function(value) { return '$' + value.toFixed(2) + 'M'; } }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    // 5. Outlet Size Donut Chart
    const ctxOutletSize = document.getElementById('outletSizeChart').getContext('2d');
    charts.outletSize = new Chart(ctxOutletSize, {
        type: 'doughnut',
        data: {
            labels: ['Medium', 'Small', 'High'],
            datasets: [{
                data: [445, 508, 249],
                backgroundColor: ['#4caf50', '#aed581', '#fec800'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: { legend: { display: false } }
        }
    });

    // 6. Outlet Location Horizontal Bar
    const ctxOutletLoc = document.getElementById('outletLocationChart').getContext('2d');
    charts.outletLocation = new Chart(ctxOutletLoc, {
        type: 'bar',
        data: {
            labels: ['Tier 3', 'Tier 2', 'Tier 1'],
            datasets: [{
                data: [472.13, 393.15, 336.40],
                backgroundColor: ['#d1aa00', '#fec800', '#aed581'],
                barPercentage: 0.6
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { display: false, grid: { display:false } },
                y: { grid: { display:false }, border: {display: false} }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// Function to simulate filtering by randomly adjusting data values
function applyFilters() {
    // Generate a random multiplier between 0.5 and 1.5 to mock filtered data
    const multiplier = Math.random() * (1.5 - 0.5) + 0.5;

    // Update KPI Cards
    const kpiTotalSales = document.querySelector('.kpi-total-sales .kpi-value');
    const kpiAvgSales = document.querySelectorAll('.kpi-container .kpi-card:not(.kpi-total-sales) .kpi-value')[0];
    const kpiItems = document.querySelectorAll('.kpi-container .kpi-card:not(.kpi-total-sales) .kpi-value')[1];
    const kpiRating = document.querySelectorAll('.kpi-container .kpi-card:not(.kpi-total-sales) .kpi-value')[2];

    kpiTotalSales.innerText = "$" + (1.2 * multiplier).toFixed(1) + "M";
    kpiAvgSales.innerText = "$" + Math.round(141 * multiplier);
    kpiItems.innerText = Math.round(8523 * multiplier);
    
    // Rating should stay between 1 and 5
    let newRating = (3.9 * multiplier).toFixed(1);
    if(newRating > 5) newRating = "5.0";
    if(newRating < 1) newRating = "1.0";
    kpiRating.innerText = newRating;

    // Update Charts
    for (let key in charts) {
        if (charts.hasOwnProperty(key)) {
            const chart = charts[key];
            chart.data.datasets.forEach((dataset) => {
                dataset.data = dataset.data.map(val => val * (Math.random() * (1.2 - 0.8) + 0.8) * multiplier);
            });
            chart.update();
        }
    }

    // Optional: Update table values randomly as well
    const tableCells = document.querySelectorAll('.data-table tbody td:not(:first-child)');
    tableCells.forEach(cell => {
        let text = cell.innerText;
        if(text.includes('$') && text.includes('K')) {
            let val = parseInt(text.replace('$', '').replace('K', ''));
            cell.innerText = '$' + Math.round(val * multiplier) + 'K';
        } else if (text.includes('$')) {
            let val = parseInt(text.replace('$', ''));
            cell.innerText = '$' + Math.round(val * multiplier);
        } else if (!text.includes('.')) {
            let val = parseInt(text);
            cell.innerText = Math.round(val * multiplier);
        }
    });
}

// Add Event Listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCharts();

    const locationFilter = document.getElementById('locationFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    const typeFilter = document.getElementById('typeFilter');

    locationFilter.addEventListener('change', applyFilters);
    sizeFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
});
