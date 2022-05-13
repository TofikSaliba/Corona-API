export class MyChart {
  constructor(canvasElement) {
    this.canvasEl = canvasElement;

    this.config = {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 199, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [10, 10, 5, 2, 20, 2],
          },
        ],
      },
      options: {},
    };
  }

  setValues = (newVal) => {
    this.config.data.datasets[0].data = newVal;
  };

  setLabels = (newLabels) => {
    this.config.data.labels = newLabels;
  };
}
