var in_labels = [  0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,
    13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,
    26,  27,  28,  29,  31,  32,  33,  34,  35,  36,  37,  39,  42,
    44,  45,  51,  52,  54,  55,  56,  60,  63,  65,  68,  69,  73,
    76,  79, 103]
var out_labels = [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 33, 34, 35,
    36, 38, 39, 40, 41, 44, 46, 47, 48, 53, 55, 63, 66, 72, 84]

lineChart = new Chart(document.getElementById("InOutDeg"), {
    type: 'line',
    data: {
        labels: out_labels,
        datasets: [{
            data: [ 2,  4,  5, 12, 10, 16, 20, 17,  9, 12, 12, 10, 15, 11, 10,  5,  9,
                3,  7,  6,  3,  3,  5,  8,  4,  5,  1,  1,  1,  4,  3,  2,  1,  1,
                3,  3,  3,  1,  2,  2,  1,  1,  1,  1,  1,  1,  2,  1,  1],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Out Degree Distribution of Gcc'
        },
        legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
    }
});


document.getElementById("Out-Degree").addEventListener("click", function() {
  lineChart.config.data = {
            labels: out_labels,
            datasets: [{
                data: [ 2,  4,  5, 12, 10, 16, 20, 17,  9, 12, 12, 10, 15, 11, 10,  5,  9,
                    3,  7,  6,  3,  3,  5,  8,  4,  5,  1,  1,  1,  4,  3,  2,  1,  1,
                    3,  3,  3,  1,  2,  2,  1,  1,  1,  1,  1,  1,  2,  1,  1],

            }],
        }
        lineChart.options.title.text = "Out Degree Distribution of Gcc"
        lineChart.update();
});

document.getElementById("In-Degree").addEventListener("click", function() {
  lineChart.config.data = {
            labels: in_labels,
            datasets: [{
                data: [ 3, 12, 14, 14, 13, 17, 18, 12, 16,  6, 13,  8,  5,  7,  9,  5,  9,
                    5,  8,  3,  4,  3,  3,  2,  1,  5,  4,  3,  2,  2,  2,  2,  2,  2,
                    1,  1,  3,  2,  2,  1,  2,  2,  1,  1,  1,  1,  1,  1,  1,  1,  1,
                    1,  1,  1,  1],

            }],
        }
        lineChart.options.title.text = "In Degree Distribution of Gcc"
        lineChart.update();
});
