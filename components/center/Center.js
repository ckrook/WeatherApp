import { useRecoilState } from "recoil";
import { selectedIdState } from "../../atoms/weatherAtoms";
import { useEffect } from "react";
import { api } from "../../lib/api";
import { useState } from "react/cjs/react.development";
import MainHeader from "./MainHeader";
import Forecast from "./Forecast";
import Mainbody from "./Mainbody";
import Temp from "./Temp";

function Center() {
  const [selectedId] = useRecoilState(selectedIdState);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [forecast, setForecast] = useState({});
  //api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
  useEffect(() => {
    if (!selectedId) return;
    fetch(`${api.base}weather?id=${selectedId}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "404") return console.log("No city is choosen");
        if (result.cod === "400") return console.log("No city is choosen");
        setLat(result.coord.lat);
        setLon(result.coord.lon);
        setWeather(result);
      });
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId) return;
    if (lat.length < 1) return;
    if (lon.length < 1) return;
    fetch(
      `${api.base}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "404") return console.log("No city is choosen");
        if (result.cod === "400") return console.log("No city is choosen");
        setForecast(result);
        console.log(result, "forecast");
      });
  }, [lon, lat, selectedId]);

  return (
    <div className="flex-row flex-grow bg-gray-900 p-5 text-xl space-y-8">
      <MainHeader weather={weather} />
      <Mainbody weather={weather} />
      <Temp weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
}

export default Center;
