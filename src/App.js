import { MenuItem, Select, FormControl } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
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

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries and show that in dropdown */}

            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}

            {/* <MenuItem value="worldwide">worldwide1</MenuItem>
            <MenuItem value="worldwide">worldwide2</MenuItem>
            <MenuItem value="worldwide">worldwide3</MenuItem>
            <MenuItem value="worldwide">worldwide4</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input Dropdown Field */}

      {/* InfoBoxs */}
      {/* INfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}
