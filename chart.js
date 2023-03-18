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
                        // size: 16,
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
console.clear();