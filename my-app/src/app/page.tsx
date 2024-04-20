"use client"; // This is a client component 
import Image from "next/image"
import { KeyboardEventHandler, MouseEventHandler, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

export default function Home() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dublin&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

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

      <Image alt="" fill src="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D" />
    </main>
  );
}
