import { ChevronRightIcon } from "@heroicons/react/solid";
import {
  WiDirectionUpRight,
  WiDirectionUpLeft,
  WiDirectionDownLeft,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionRight,
  WiDirectionUp,
} from "react-icons/wi";

function Card({ weather }) {
  return (
    <div className="card">
      <div>
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 bg-red-500 rounded-full" />
          <h3>{weather.name}</h3>
        </div>
        <ol className="flex space-x-12">
          <li>
            <span className="sm-h">Sky</span>
            <p>{weather.weather[0].main}</p>
          </li>
          <li>
            <span className="sm-h">Temp</span>
            <p>{weather.main.temp}°C</p>
          </li>
          <li>
            <span className="sm-h">Wind</span>
            <div className="flex items-center">
              <p>{weather.wind.speed}</p>
              <WiDirectionUpRight className="w-7 h-7" />
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
