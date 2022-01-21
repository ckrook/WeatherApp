function MainHeader({ weather }) {
  return (
    <div className="Center-header">
      <h2>{weather.name}</h2>
      {/* <span>{Math.floor(weather.main.temp)}°C</span> */}
    </div>
  );
}

export default MainHeader;
