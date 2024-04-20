import Image from "next/image";

export default function Home() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dublin&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  return (
    <main>
     <h1>{"Hello World"}</h1>
    </main>
  );
}
