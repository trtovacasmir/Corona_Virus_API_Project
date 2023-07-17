import React, { useState, useEffect } from "react";
import "./style.css";
import cooronaImage from "./corona.png";
import Footer from "./Footer/Footer";
import axios from "axios";

const Home = () => {
  const [worldStats, setWorldStats] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        headers: {
          "X-RapidAPI-Key":
            "61dba790cdmshb8f57517ebe5149p14c61djsnea99f8dd1a20",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setWorldStats(response.data.response[236]);
        console.log(response.data.response[236]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="nesto">
          <div className="left">
            <h1>Tracking COVID-19: Information is the Best Protection</h1>
            <p>
              Welcome to our website dedicated to tracking and analyzing the
              latest data on the coronavirus. Our goal is to provide you with
              comprehensive information on the number of cases, recoveries, and
              fatalities, as well as statistics related to the spread of the
              virus worldwide. With our regularly updated data, you can monitor
              trends and make informed decisions to protect yourself and your
              loved ones. Let's be responsible, supportive, and care for each
              other.
            </p>
          </div>
          <div className="right">
            <img src={cooronaImage} alt="Korona slika" />
          </div>
        </div>

        <div className="home_data">
          <h2>WORLD STATS</h2>

          <div className="parenvt_four_div">
            {worldStats && (
              <>
                <div id="t" className="one">
                  <h4>Recovered</h4>
                  <p>{worldStats.cases.recovered}</p>
                </div>
                <div id="t" className="two">
                  <h4>Deaths</h4>
                  <p>{worldStats.deaths.total}</p>
                </div>
                <div id="t" className="three">
                  <h5>Active Cases</h5>
                  <p>{worldStats.cases.active}</p>
                </div>
              </>
            )}

            <div id="t" className="four">
              <h5>Country Stats</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
