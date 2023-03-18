const chart = document.getElementById("myChart");
const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
    type: "radar",
    data: {
        labels: ["외향성(E)", "감각(S)", "느낌(F)", "판단(J)", "내향성(I)", "직감(N)", "생각(T)", "인식(P)"],
        datasets: [
            {
                data: [39, 65, 44, 70, 61, 38, 56, 30],
                backgroundColor: ["rgba(176, 157, 203, 0.1)"],
                borderColor: ["rgba(176, 157, 203, 1)"],
                borderWidth: 1,
                pointStyle: "circle",
                pointRadius: [3, 5, 3, 5, 5, 3, 5, 3],
                pointBackgroundColor: ["rgba(176, 157, 203, 1)"],
            },
        ],
    },
    options: {
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        onHover: (event, chartElement) => {
            if (chartElement.length > 0) {
              myChart.update();
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                usePointStyle: true,
            },
        },
        scales: {
            r: {
                min: 0,
                max: 100,
                ticks: {
                    display: false,
                },
                pointLabels: {
                    font: {
                        family: 'NanumSquareNeo-Variable',
                        size: function (context) {
                            var index = context.index;
                            if (index === 1 || index === 3 || index === 4 || index === 6) {
                                return 15;
                            } else {
                                return 13;
                            }
                        },
                        weight: function (context) {
                            var index = context.index;
                            if (index === 1 || index === 3 || index === 4 || index === 6) {
                                return "bold";
                            } else {
                                return "normal";
                            }
                        },
                    },
                    color: function (context) {
                        var index = context.index;
                        if (index === 1 || index === 3 || index === 4 || index === 6) {
                            return "#7272B7";
                        } else {
                            return "black";
                        }
                    },
                },
            },
        },
        ticks: {
            beginAtZero: true,
            stepSize: 50,
        },
    },
});

const chart2 = document.getElementById("chart-skills");
const ctx2 = document.getElementById("chart-skills").getContext("2d");
const myChart2 = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: ["Java", "MySQL", "HTML5", "CSS3", "Javascript", "GitHub"],
        datasets: [
            {
                data: [65, 50, 55, 45, 45, 40],
                backgroundColor: [
                    "rgba(176, 157, 203, 0.8)",
                    "rgba(176, 157, 203, 0.5)",
                    "rgba(176, 157, 203, 0.7)",
                    "rgba(176, 157, 203, 0.5)",
                    "rgba(176, 157, 203, 0.5)",
                    "rgba(176, 157, 203, 0.4)"
                ],
                borderColor: ["rgba(176, 157, 203, 1)"],
                borderWidth: 1,
                borderRadius: 3
            },
        ],
    },
    options: {
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        onHover: (event, chartElement) => {
            if (chartElement.length > 0) {
              myChart.update();
            }
        },
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            r: {
                ticks: {
                    display: false,
                }
            },
            x: {
                max: 100,
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        },
        ticks: {
            stepSize: 20,
            beginAtZero: false,
            font: {
                family: 'NanumSquareNeo-Variable',
                size: 12,
                weight: 'bold'
            }
        },
        barThickness: 17,
    },
});
console.clear();