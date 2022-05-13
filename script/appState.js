import { MyChart } from "./MyChart.js";

export class MainData {
  static async build(canvasEl) {
    const data = await MainData.fetchCoronaObj();
    return new MainData(data, canvasEl);
  }

  static fetchCoronaObj = async () => {
    try {
      const localCoronaData = localStorage.getItem("coronaDataObj");
      if (localCoronaData) {
        const localData = JSON.parse(localCoronaData);
        console.log("from local final", localData);
        return localData;
      }
      const res = await fetch("https://corona-api.com/countries");
      const data = await res.json();
      const countriesStats = await this.getCountriesByContinent();
      this.assignCountries(data.data, countriesStats);
      localStorage.setItem("coronaDataObj", JSON.stringify(countriesStats));
      console.log("from fetch final", countriesStats);
      return countriesStats;
    } catch (e) {
      console.log(e);
    }
  };

  static getCountriesByContinent = async () => {
    const localTemplate = localStorage.getItem("continentObj");
    if (localTemplate) {
      const template = JSON.parse(localTemplate);
      console.log("from local", JSON.parse(localTemplate));
      return template;
    }
    const countries = await this.fetchCountries();
    localStorage.setItem("continentObj", JSON.stringify(countries));
    console.log("from fetch", JSON.parse(localStorage.getItem("continentObj")));
    return countries;
  };

  static fetchCountries = async () => {
    try {
      const res = await fetch(
        "https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1"
      );
      const data = await res.json();
      const continentObj = {};
      this.createObject(continentObj, data);
      return continentObj;
    } catch (e) {
      console.log(e);
    }
  };

  static createObject = (continentObj, data) => {
    data.forEach((country) => {
      if (country.region !== "") {
        if (!continentObj[country.region]) {
          continentObj[country.region] = [];
        }
        const obj = {};
        obj.name = country.name.common;
        continentObj[country.region].push(obj);
      }
    });
  };

  static assignCountries = (data, countries) => {
    const continents = ["Asia", "Europe", "Africa", "Oceania", "Americas"];
    data.forEach((country) => {
      let flag = false;
      for (let continent of continents) {
        for (let countryObj of countries[continent]) {
          if (countryObj.name === country.name) {
            this.addCountryStats(countryObj, country);
            flag = true;
            break;
          }
        }
        if (flag) break;
      }
      if (country.name) {
      }
    });
  };

  static addCountryStats = (countryObj, country) => {
    countryObj.newDeaths = country.today.deaths;
    countryObj.newCases = country.today.confirmed;
    countryObj.deaths = country.latest_data.deaths;
    countryObj.cases = country.latest_data.confirmed;
    countryObj.recovered = country.latest_data.recovered;
    countryObj.critical = country.latest_data.critical;
  };

  constructor(coronaObj, canvasEL) {
    this.coronaObj = coronaObj;
    this.myChart = new MyChart(canvasEL);
  }
}