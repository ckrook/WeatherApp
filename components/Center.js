import { useRecoilState } from "recoil";
import { selectedIdState } from "../atoms/weatherAtoms";
import { useEffect } from "react";
import { api } from "../lib/api";
import { useState } from "react/cjs/react.development";
import MainHeader from "./center/MainHeader";

function Center() {
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);
  const [weather, setWeather] = useState([]);
  //api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
  useEffect(() => {
    if (!selectedId) return;
    fetch(`${api.base}weather?id=${selectedId}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "404") {
          return console.log("No city is choosen");
        }
        console.log(result);
        setWeather(result);
      });
  }, [selectedId]);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <div className="flex flex-grow bg-blue-500 p-5">
      <MainHeader weather={weather} />
    </div>
  );
}

export default Center;
