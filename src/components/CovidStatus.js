import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Box, Pagination } from "@mui/material";

const CovidStats = () => {
  const [countries, setCountries] = useState([]);
  const [countryFlags, setCountryFlags] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

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
    const {
      country: countryName,
      continent,
      population,
      cases,
      deaths,
    } = country;
    const countryFlag = countryFlags.find(
      (flag) => flag.name.common === countryName
    );

    if (countryFlag) {
      return (
        <div className="country_card" key={countryName}>
          <div className="image">
            {" "}
            <img src={countryFlag.flags.png} alt={countryName} />
          </div>
          <div className="country-and-continent">
            <div className="continent">
              {" "}
              <h3>{continent}</h3>
            </div>
            <div className="country">
              {" "}
              <h3>{countryName}</h3>
            </div>
          </div>
          <div className="stats">
            <div className="population">
              {" "}
              <h5>Population: {population}</h5>
            </div>
            <div className="newCases">
              <h5>New Cases: {cases.new || "0"}</h5>
            </div>
            <div className="deaths">
              {" "}
              <h5>Deaths: {deaths.total || "0"}</h5>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const total = countries.length;
  const pageCount = Math.ceil(total / itemsPerPage);
  const displayedCountries = countries.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="CovidCountries">
      {displayedCountries.map((country) => renderCountryStats(country))}
      <Box sx={{ mt: 2 }}>
        <Pagination
          className="pagination"
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
        />
      </Box>
    </div>
  );
};

export default CovidStats;
