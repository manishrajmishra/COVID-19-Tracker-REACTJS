import { MenuItem, Select, FormControl } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  //STATE = How to write a variable in REACT

  //https://desease.sh/v3/covid-19/countries

  useEffect(() => {
    //async -> send a request, wait for it do something with the data until is comes back

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //Unitied Kingdom
            value: country.countryInfo.iso2 //UK
          }));

          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);
  //USEEFFECT = Runs a piece of code based on condition
  //[] means in useeffect = the code inside herer will run once whne the component loads and not again

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        {/* Title + Select input Dropdown Field */}
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            {/* Loop through all the countries and show that in dropdown */}
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        {/* InfoBoxs title="Coronavirus Caes"*/}
        {/* INfoBoxs title="Coronavirus recoveries"*/}
        {/* InfoBoxs */}
      </div>

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}
