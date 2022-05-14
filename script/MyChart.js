export class MyChart {
  constructor() {
    this.canvasEl = document.getElementById("myChart").getContext("2d");

    this.config = {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "Number of Cases",
            backgroundColor: "rgb(23, 104, 86)",
            borderColor: "rgb(3, 3, 3)",
            data: [],
          },
          {
            label: "Number of Deaths",
            backgroundColor: "rgb(49, 49, 49)",
            borderColor: "rgb(3, 3, 3)",
            data: [],
            hidden: true,
          },
          {
            label: "Number of Critical",
            backgroundColor: "rgb(138, 4, 4)",
            borderColor: "rgb(3, 3, 3)",
            data: [],
            hidden: true,
          },
          {
            label: "Number of Recovered",
            backgroundColor: "rgb(13, 120, 241)",
            borderColor: "rgb(3, 3, 3)",
            data: [],
            hidden: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false,
            text: "Chart.js Line Chart - Logarithmic",
          },
          legend: {
            onHover: function (e) {
              document.body.style.cursor = "pointer";
            },
            onLeave: function (e) {
              document.body.style.cursor = "unset";
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            type: "logarithmic",
            min: 0,
            grid: {
              display: false,
            },
          },
        },
      },
    };

    this.charVar = new Chart(this.canvasEl, this.config);

    Chart.defaults.font.size = 10;
  }

  setValues = (statsArr) => {
    this.config.data.datasets[0].data = statsArr[0];
    this.config.data.datasets[1].data = statsArr[1];
    this.config.data.datasets[2].data = statsArr[2];
    this.config.data.datasets[3].data = statsArr[3];
  };

  setLabels = (newLabels) => {
    this.config.data.labels = newLabels;
  };
}
