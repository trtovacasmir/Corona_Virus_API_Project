import React, { useEffect, useState } from 'react';
import './style.css'

const MyComponent = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://covid-193.p.rapidapi.com/statistics', {
      headers: {
        'X-RapidAPI-Key': '504beda31amsh83ca0de5b65ab99p1f8d59jsne12d84eb16c1',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        const countryNames = data.response.map(item => item);
        setCountries(countryNames);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      
      {countries.map((item, index) => (
        <div className='country_card'>

          <h3 key={index}>{item.country}</h3>
          <h3 key={index}>{item.continent}</h3>
          <h5 key={index}>Population:{item.population}</h5>
        </div>
        
      ))}

    </div>
  );
};

export default MyComponent;
