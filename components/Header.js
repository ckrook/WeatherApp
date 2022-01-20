import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { weatherIdState } from "../atoms/weatherAtoms";
import { motion } from "framer-motion";
import { WiDayCloudyWindy } from "react-icons/wi";
import { api } from "../lib/api";

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
        <div className="flex justify-center items-center">
          <WiDayCloudyWindy className="w-10 h-10 text-black" />
          <h1>Weather App</h1>
        </div>
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
