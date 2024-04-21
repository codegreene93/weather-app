import React from 'react';
import Image from "next/image";




const WeatherDisplay = ({data}) => {
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      <div className='relative flex justify-between pt-12'>
        <Image 
         src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
         alt="/"
         width={100}
         height={100}
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
      </div>
      <p className='9xl'>{data.main.temp.toFixed(0)}</p>
    </div>
  )
}

export default WeatherDisplay