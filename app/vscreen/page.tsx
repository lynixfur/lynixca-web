"use client"

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

const VScreen = () => {
    const [currentTime, setCurrentTime] = useState(moment());
    const [weather, setWeather]: any = useState(null);
    const [location, setLocation] = useState('Moncton'); // Set your default location here

    const getWeatherIcon = (main: string) => {
        switch (main) {
            case 'Clear':
                return "fa-sun";
            case 'Clouds':
                return "fa-cloud";
            case 'Rain':
                return "fa-cloud-rain";
            case 'Snow':
                return "fa-snowflake";
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                return "fa-smog";
            default:
                return "fa-smog";
        }
    };

    const apiKey = 'cdba6bd67aef96da2af49cf42ad00ce7'; // Replace with your OpenWeather API key

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
                setWeather(response.data);
            } catch (error) {
                console.error("Error fetching weather data: ", error);
            }
        };

        fetchWeather();
    }, [location, apiKey]);

    const formatDate = (date: any) => {
        return date.format('dddd, MMMM D, YYYY');
    };

    const formatTime = (date: any) => {
        return date.format('hh:mm:ss');
    };

    const getGreeting = () => {
        const hour = currentTime.hour();
        if (hour < 12) {
            return 'Good Morning Lynix';
        } else if (hour < 18) {
            return 'Good Afternoon Lynix';
        } else {
            return 'Good Evening Lynix';
        }
    };

    return (
        <main className="h-screen w-full flex items-center justify-center bg-black">
            <div className="flex flex-col items-center">
            <h1 className="glitch text-[40px]  text-cyan-500 text-center" data-text={getGreeting()}>
                    {getGreeting()}
                </h1>
                <h1 className="glitch text-[40px] w-full h-[50px]" data-text={formatDate(currentTime)}>
                    {formatDate(currentTime)}
                </h1>
                <h1 className="glitch text-[100px]" data-text={formatTime(currentTime)}>
                    {formatTime(currentTime)}
                </h1>
                {weather && (
                    <div className="weather-info text-white mt-4 text-center">
                        <h2 className="text-[30px] glitch" data-text={weather.name}>{weather.name}</h2>
                        <p className="text-[20px] hidden">{weather.weather[0].description}</p>
                        <p className="text-[20px] text-cyan-500"><i className={`fa-solid ${getWeatherIcon(weather.weather[0].main)}`}/> <span className='glitch-temp' data-text={`${Math.round(weather.main.temp)}°C`}>{Math.round(weather.main.temp)}°C</span></p>
                        <p className='text-[12px] italic mt-10'>Powered by the Lynx Network</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default VScreen;
