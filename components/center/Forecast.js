import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { date } from "../../lib/date";

function Forecast({ forecast }) {
  const [currentForecast, setcurrentForecast] = useState(null);

  useEffect(() => {
    if (!forecast) return;
    if (forecast.daily == undefined) return;
    setcurrentForecast(forecast);
  }, [forecast]);

  return (
    <div className="flex justify-between space-x-8">
      {forecast.daily &&
        forecast.daily.map((f, index) => {
          return (
            <div className="forecast-box">
              {date(index)} {Math.floor(f.temp.day)} °C
            </div>
          );
        })}
    </div>
  );
}

export default Forecast;
