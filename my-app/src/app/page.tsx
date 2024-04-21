"use client"; // This is a client component 
import Image from "next/image"
import { KeyboardEventHandler, MouseEventHandler, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

export default function Home() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then(response => {
      setWeather(response.data)
      console.log(response.data)
    })
    setCity('');
    setLoading(false);

  }
  return (
    <main>
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      {/* Background */}
      <Image 
       alt=""
       fill 
       className="object-cover"
       src="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
        />

        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
            <div>
              <input onChange={(e) => setCity(e.target.value)} className="bg-transparent border-none text-white focus:outline-none text-2xl " type="text" placeholder="Search city"/>
            </div>
            <button onClick={fetchWeather}><BsSearch size={20}/></button>
          </form>
        </div>
    </main>
  );
}
