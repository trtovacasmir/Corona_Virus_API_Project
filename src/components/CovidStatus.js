import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Box, Pagination } from "@mui/material";
import Country_image from './country.png';
import Continent_image from './continent.png';

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
        const flags = response.data.map((flag) => {
          const flagName = flag.name.common.replace(/ /g, "-").toLowerCase();
          return { ...flag, name: flagName };
        });
        setCountryFlags(flags);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderCountryStats = (country, index) => {
    const {
      country: countryName,
      continent,
      population,
      cases,
      deaths,
    } = country;
    const countryFlag = countryFlags.find(
      (flag) => flag.name === countryName.toLowerCase()
    );

    if (countryFlag && index < itemsPerPage) {
      return (
        <div className="country_card_bure" key={countryName}>
          <div className="country_card_flag">
            <img
              className="country_card_image"
              src={countryFlag.flags.png}
              alt={countryName}
            />
          </div>

          <div className="country_card_cc">
            <div className="country_card_cc_continent">
              <img
                className="country_card_cc_continent_continetn_image"
                src={Continent_image}
                alt="Continent"
              />
              <h2>{continent}</h2>
            </div>
            <div className="country_card_cc_continent_country">
              <img
                className="country_card_cc_continent_country_image"
                src={Country_image}
                alt="Country"
              />
              <h2>{countryName}</h2>
            </div>
          </div>

          <div className="country_card_data">
            <div className="country_card_population">
              <h5>
                Population:
                <br />
                {population}
              </h5>
            </div>
            <div className="country_card_active_cases">
              <h5>
                Active Cases:
                <br />
                {cases.active}
              </h5>
            </div>
            <div className="country_card_deaths">
              <h5>
                Deaths:
                <br />
                {deaths.total}
              </h5>
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

  const pageCount = Math.ceil(countries.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, countries.length);
  const displayedCountries = countries.slice(startIndex, endIndex);

  return (
    <div className="CovidCountries">
      {displayedCountries.map((country, index) => renderCountryStats(country, index))}
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
