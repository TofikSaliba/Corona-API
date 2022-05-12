const getData = async () => {
  const res = await fetch("https://corona-api.com/countries");
  const data = await res.json();
  console.log(data);
  const res1 = await fetch(
    "https://restcountries.herokuapp.com/api/v1/region/europe"
  );
  // const res1 = await fetch(
  //   "https://cors-anywhere.herokuapp.com/restcountries.herokuapp.com/api/v1/region/europe"
  // );
  // const res1 = await fetch(
  //   "https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1/region/europe"
  // );
  const data1 = await res1.json();
  console.log(data1);
};

getData();

function fetchData() {
  return [12, 19, 13, 5, 10, 3];
}

function fetchCountries() {
  return ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
}

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: fetchCountries(),
    datasets: [
      {
        label: "# of Votes",
        data: fetchData(),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
