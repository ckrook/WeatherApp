import { time } from "../../lib/date";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";

function Mainbody({ weather }) {
  return (
    <div>
      {weather.cod && (
        <div className="grid grid-cols-3 justify-between space-x-8">
          <div className="bg-white flex-col space-y-4 card rounded-xl col-span-2">
            <div className="progressbar-wrapper">
              <p className="p-2">Clouds: {weather.clouds.all}%</p>
              <div
                className="progressbar rounded-xl"
                style={{ width: weather.clouds.all + "%" }}
              ></div>
            </div>
            <div className="progressbar-wrapper">
              <p className="p-2">Humidity: {weather.main.humidity}%</p>
              <div
                className="progressbar rounded-xl"
                style={{ width: weather.main.humidity + "%" }}
              ></div>
            </div>
          </div>
          <div className="bg-white card rounded-xl">
            <div className="flex-col justify-center text-center border-b">
              <div className="flex justify-center">
                <WiSunrise className="w-10 justify-center" />
              </div>
              <p>Sunrise: {time(weather.sys.sunrise)}</p>
            </div>
            <div className="flex-col justify-center text-center">
              <div className="flex justify-center">
                <WiSunset className="w-10 justify-center" />
              </div>
              <p>sunset: {time(weather.sys.sunset)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainbody;
