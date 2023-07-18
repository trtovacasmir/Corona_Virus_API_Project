
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://covid-193.p.rapidapi.com/history';
      const params = new URLSearchParams({ country: 'serbia', day: '2023-07-17' });
      const headers = {
        'X-RapidAPI-Key': '504beda31amsh83ca0de5b65ab99p1f8d59jsne12d84eb16c1',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      };
    
      try {
        const response = await fetch(`${url}?${params}`, { headers });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Ostatak komponente */}
    </div>
  );
};

export default MyComponent;

