import { MainData } from "./appState.js";

const ctx = document.getElementById("myChart").getContext("2d");
const coronaObj = await MainData.build(ctx);

// console.log(coronaObj.coronaObj);

function fetchData() {
  return [5, 1, 1, 5, 5, 1];
}

function fetchCountries() {
  return ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
}

let myChart = new Chart(coronaObj.myChart.canvasEl, coronaObj.myChart.config);

setTimeout(() => {
  coronaObj.myChart.setValues(fetchData());
  coronaObj.myChart.setLabels(fetchCountries());
  myChart.destroy();
  myChart = new Chart(coronaObj.myChart.canvasEl, coronaObj.myChart.config);
}, 3000);
