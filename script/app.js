import { MainData } from "./appState.js";

const coronaObj = await MainData.build();

const btnsListener = () => {
  document.querySelector(".btnContainer").addEventListener("click", (e) => {
    let continent = e.target.getAttribute("data-continent");
    if (continent && continent !== coronaObj.pickedCont) {
      document.querySelector(".singleCountry").style.visibility = "hidden";
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
  updateSelect(countries);
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

const updateSelect = (countries) => {
  const select = document.querySelector("#countriesSelect");
  select.textContent = "";
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select Country";
  defaultOption.selected = true;
  defaultOption.disabled = true;
  select.appendChild(defaultOption);
  for (let country of countries) {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
  }
};

const selectListener = () => {
  const singleCountryDivs = document.querySelectorAll(".singleCountry div");
  document.querySelector("#countriesSelect").addEventListener("input", (e) => {
    let country = coronaObj.coronaObj[coronaObj.pickedCont].find(
      (countryObj) => {
        return countryObj.name === e.target.value;
      }
    );
    if (country) {
      assignCountryDivs(country, singleCountryDivs);
      document.querySelector(".singleCountry").style.visibility = "visible";
    }
  });
};

const assignCountryDivs = (country, singleCountryDivs) => {
  const stats = [
    "cases",
    "deaths",
    "critical",
    "recovered",
    "newCases",
    "newDeaths",
  ];
  singleCountryDivs.forEach((div, idx) => {
    div.textContent = stats[idx] + ": " + country[stats[idx]];
  });
};

const start = () => {
  displayData("Africa");
  btnsListener();
  selectListener();
};

start();
// console.log(coronaObj.coronaObj);

let x = new Date();

console.log(x.getTime());
