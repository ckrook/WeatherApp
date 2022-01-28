import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { date } from "../../lib/date";

function Forecast({ forecast }) {
  const [currentForecast, setcurrentForecast] = useState(null);

  if (forecast.daily) {
    let forecastList = forecast.daily.slice(0, 7);
  }

  useEffect(() => {
    if (!forecast) return;
    if (forecast.daily == undefined) return;
    setcurrentForecast(forecast);
  }, [forecast]);

  return (
    <div>
      <div className="grid bg-white rounded-3xl divide-x grid-cols-7">
        {forecast.daily &&
          forecastList.map((f, index) => {
            return (
              <div key={index} className="forecast-box">
                <div>{date(index)}</div>
                <div>{Math.floor(f.temp.day)} °C</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Forecast;
