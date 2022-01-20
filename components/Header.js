import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { weatherIdState } from "../atoms/weatherAtoms";
import { motion } from "framer-motion";

const api = {
  key: "70a2b23f6e6622745d4179d63b7e8cab",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Header() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState([]);
  const [weatherId, setWeatherId] = useRecoilState(weatherIdState);
  useEffect(() => {
    setWeatherId(weather);
  }, [weather]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === "404") {
            setInput("");
            return console.log("Visa animation not found animation");
          }
          setWeather((weather) => [...weather, result]);
          setInput("");
        });
    }
  };

  // Lagrar det som skrivs in i input
  // När enter trycks så fetchar vi data
  // från openweather api

  return (
    <div className="text-center mt-4 mb-16">
      <div className="mb-8">
        <h1>Weather App</h1>
        <p>Simple weather app to get current weather by city</p>
      </div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyPress={search}
        type="text"
        placeholder="Search city.."
      />
    </div>
  );
}

export default Header;
