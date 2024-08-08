import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Kafelek from './Kafelek.jsx';

export default function MainContent() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=53.14&lon=17.60&appid=bc8adfdabd2320661bc6ace321192086&units=metric';
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      
  }, [url]);

  const temperatura = data.main ? Math.round(data.main.temp) : 'error';
  const wilgotnosc = data.main ? `${data.main.humidity}%`: 'error';
  const imageSrc = temperatura != null && temperatura > 20.00 ? 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' : 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather04-512.png';
  
  
  return (
    <div className="content flex flex-col">
        <div className="flex flex-row-reverse w-full">
            <div className="w-1/6 h-36 m-5 flex items-center justify-center">
              <p className='text-white font-bold'></p>
                <Kafelek bg='bg-neutral-900'>
                    <div className="flex flex-col items-center justify-center h-full w-full pb-5">
                      <div className='flex flex-row items-center'>
                        {temperatura !== null && (
                          <img className='h-16 w-16' src={imageSrc} alt={temperatura > 20.00 ? 'Warm' : 'Cold'} />
                        )}
                         
                        <h1 className='text-4xl font-bold pl-3'>{temperatura}°C</h1>
                      </div>
                      <h1 className='text-xl font-bold'>Nakło nad Notecią</h1>
                    </div>
                </Kafelek>
            </div>
            <div className="w-5/6 h-60 m-5">
                <Kafelek bg='bg-neutral-900'>
                    <p></p>
                </Kafelek>
            </div>
        </div>
        <div className="w-72 h-60 mt-4 border-blue-700 border-2 border-solid">
            <Kafelek bg="bg-[url('/assets/ja.png')]">
                <p>inna zawartość</p>
            </Kafelek>
        </div>
    </div>
  );
}
