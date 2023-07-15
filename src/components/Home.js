import react from 'react';
import './style.css'
import cooronaImage from './coorna.png';


const Home = () => {
    return(
        <div className='container'>

        <div className='nesto'>

            <div className='left'>
                <h3>Tracking COVID-19: Information is the Best Protection</h3>
                <p>Welcome to our website dedicated to tracking and analyzing the latest data on the coronavirus. Our goal is to provide you with comprehensive information on the number of cases, recoveries, and fatalities, as well as statistics related to the spread of the virus worldwide. With our regularly updated data, you can monitor trends and make informed decisions to protect yourself and your loved ones..Let's be responsible, supportive, and care for each other.</p>
            </div>
            <div className='right'>
            <img src={cooronaImage} alt='Korona slika' />   
            </div>
            
        </div>    
            
        </div>
    )
}

export default Home