import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const MyComponent = () => {
  const [countries, setCountries] = useState([]);
  const [countryFlags, setCountryFlags] = useState([]);

  useEffect(() => {
    fetchData();
    fetchCountryFlags();
  }, []);

  const fetchData = () => {
    axios
      .get("https://covid-193.p.rapidapi.com/statistics", {
        headers: {
          "X-RapidAPI-Key":
            "504beda31amsh83ca0de5b65ab99p1f8d59jsne12d84eb16c1",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      })
      .then((response) => {
        const countryNames = response.data.response.map((item) => item);
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchCountryFlags = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountryFlags(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderCountryStats = (country) => {
    const { country: countryName, continent, population } = country;
    const countryFlag = countryFlags.find(
      (flag) => flag.name.common === countryName
    );

    if (countryFlag) {
      return (
        <div className="country_card" key={countryName}>
          <img src={countryFlag.flags.png} alt={countryName} />
          <h3>{countryName}</h3>
          <h3>{continent}</h3>
          <h5>Population: {population}</h5>
        </div>
      );
    } else {
      console.log("bilo sta");
      return null;
    }
  };

  return (
    <div>
      {countries.length > 0 &&
        countries.map((country) => renderCountryStats(country))}
    </div>
  );
};

export default MyComponent;
