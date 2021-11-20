var chart_labels = ['A', 'B', 'C', 'D']
var chart_labels1 = ['b', 'B', 'b', 'b']

lineChart = new Chart(document.getElementById("line-chart"), {
    type: 'bar',
    data: {
        labels: chart_labels1,
        datasets: [
            {
                label: "Set 1",
                fill: true,
                backgroundColor: "rgba(90,181,242,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(179,181,198,1)",
                data: [3, 1, 1, 0]
            }, {
                label: "Set 2",
                fill: true,
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                data: [1, 3, 3, 5]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Chart Title'
        }
    }
});
var myChartData = new Chart(lineChart, config);
function restoreLayer2(){
    lineChart.config.data.datasets[1].data = [1, 3, 3, 5];
    lineChart.config.data.labels[1] =chart_labels
    lineChart.update();
}

function removeLayer2() {
    lineChart.config.data.datasets[1].data = [];
    lineChart.config.data.labels[1] =[]
    lineChart.update();
}