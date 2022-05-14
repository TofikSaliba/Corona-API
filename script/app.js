import { MainData } from "./appState.js";

const coronaObj = await MainData.build();

const btnsListener = () => {
  document.querySelector(".btnContainer").addEventListener("click", (e) => {
    let continent = e.target.getAttribute("data-continent");
    if (continent && continent !== coronaObj.pickedCont) {
      document.querySelector(".chartContainer").style.visibility = "visible";
      coronaObj.pickedCont = continent;
      buttonCurrent(e.target);
      displayData(continent);
    }
  });
};

const buttonCurrent = (target) => {
  const btns = document.querySelectorAll(".btnContainer button");
  btns.forEach((btn) => btn.classList.remove("current"));
  target.classList.toggle("current");
};

const displayData = (continent) => {
  const countries = coronaObj.coronaObj[continent].map(
    (country) => country.name
  );
  coronaObj.myChart.setLabels(countries);
  const statsArr = [[], [], [], []];
  coronaObj.coronaObj[continent].forEach((country) => {
    statsArr[0].push(country.cases);
    statsArr[1].push(country.deaths);
    statsArr[2].push(country.critical);
    statsArr[3].push(country.recovered);
  });
  coronaObj.myChart.setValues(statsArr);
  coronaObj.myChart.charVar.update();
};

const start = () => {
  displayData("Africa");
  btnsListener();
};

start();
// console.log(coronaObj.coronaObj);
