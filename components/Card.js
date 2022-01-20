import { ChevronRightIcon } from "@heroicons/react/solid";
import { windDirection } from "../lib/wind";
import { useRecoilState } from "recoil";
import { selectedIdState } from "../atoms/weatherAtoms";
import { useEffect } from "react";

function Card({ weather }) {
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  return (
    <div
      className="card"
      onClick={() => {
        setSelectedId(weather.id);
      }}
    >
      <div>
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 rounded-full bg-red-500" />
          <h3>{weather.name}</h3>
        </div>
        <ol className="flex space-x-12">
          <li>
            <span className="sm-h">Sky</span>
            <p>{weather.weather[0].main}</p>
          </li>
          <li>
            <span className="sm-h">Temp</span>
            <p>{Math.floor(weather.main.temp)}°C</p>
          </li>
          <li>
            <span className="sm-h">Wind</span>
            <div className="flex items-center">
              <p>{weather.wind.speed}</p>
              {windDirection(weather.wind.deg)}
            </div>
          </li>
        </ol>
      </div>
      <div className="flex justify-end items-center">
        <div>
          <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Card;
