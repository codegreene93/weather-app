import axios from "axios";
import { KeyboardEventHandler, MouseEventHandler, useState } from "react";
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
     <h1>{"Hello World"}</h1>
     <button onClick={fetchWeather}>Get Weather</button>
    </main>
  );
}
