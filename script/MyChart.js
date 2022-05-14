export class MyChart {
  constructor() {
    this.canvasEl = document.getElementById("myChart").getContext("2d");

    this.config = {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "Cases",
            backgroundColor: "rgb(255, 199, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [],
          },
          {
            label: "Deaths",
            backgroundColor: "rgb(255, 199, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [],
          },
          {
            label: "Critical",
            backgroundColor: "rgb(255, 199, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [],
          },
          {
            label: "Recovered",
            backgroundColor: "rgb(255, 199, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [],
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
