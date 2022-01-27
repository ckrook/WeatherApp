function Temp({ weather }) {
  return (
    <div>
      {weather.cod && (
        <div className="grid grid-cols-4 justify-between gap-x-8">
          <div className="bg-white card rounded-xl">
            <p className="uppercase text-sm text-center">Current:</p>
            <span className="text-center text-4xl">
              {Math.floor(weather.main.temp)}°C
            </span>
          </div>
          <div className="bg-white card rounded-xl">
            <p className="uppercase text-sm text-center">Max:</p>
            <span className="text-center text-4xl">
              {Math.floor(weather.main.temp_max)}°C
            </span>
          </div>
          <div className="bg-white card rounded-xl">
            <p className="uppercase text-sm text-center">Min:</p>
            <span className="text-center text-4xl">
              {Math.floor(weather.main.temp_min)}°C
            </span>
          </div>
          <div className="bg-white card rounded-xl">
            <p className="uppercase text-sm text-center">Feels:</p>
            <span className="text-center text-4xl">
              {Math.floor(weather.main.feels_like)}°C
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Temp;
