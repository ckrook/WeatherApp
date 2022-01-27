import { todaysDate } from "../../lib/date";

function MainHeader({ weather }) {
  return (
    <div className="Center-header w-full">
      {weather.weather && (
        <div className="flex justify-between w-[100%]">
          <div>
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
          </div>
          <div>{todaysDate()}</div>
        </div>
      )}
    </div>
  );
}

export default MainHeader;
