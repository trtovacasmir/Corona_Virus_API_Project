import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const CountryStats = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [stats, setStats] = useState(null);
  const [countryFlag, setCountryFlag] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedCountry, selectedDate]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    if (!selectedCountry || !selectedDate) {
      return;
    }

    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/history",
      params: {
        country: selectedCountry,
        day: selectedDate,
      },
      headers: {
        "X-RapidAPI-Key": "61dba790cdmshb8f57517ebe5149p14c61djsnea99f8dd1a20",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setStats(response.data.response[0]);
    } catch (error) {
      console.error(error);
      setStats(null);
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    const selectedCountryData = countries.find(
      (country) => country.name.common === event.target.value
    );
    setCountryFlag(selectedCountryData?.flags?.png || "");
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="bodyCovid">
      <form className="form">
        <FormControl
          sx={{
            margin: "20px",
          }}
        >
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            required
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country.name.common}>
                {country.name.common}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          sx={{
            margin: "20px",
          }}
          id="date"
          label="Date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
      </form>
      <div className="bodyCovidStats">
        {stats ? (
          <div className="countryCovid">
            <div className="country-and-image">
              <h4>Country: {selectedCountry}</h4>
              <img src={countryFlag} alt={selectedCountry} />
            </div>
            <div className="dataCovid">
              <h4>Date: {selectedDate}</h4>
              <p>
                New Cases: {stats.cases.new ? stats.cases.new : "Not recorded"}
              </p>
              <p>
                Deaths: {stats.deaths.new ? stats.deaths.new : "Not recorded"}
              </p>
              <p>
                Active Cases:{" "}
                {stats.cases.active ? stats.cases.active : "Not recorded"}
              </p>
              <p>
                Recovered:{" "}
                {stats.cases.recovered ? stats.cases.recovered : "Not recorded"}
              </p>
            </div>
          </div>
        ) : (
          <div className="noData">No Data</div>
        )}
      </div>
    </div>
  );
};

export default CountryStats;
