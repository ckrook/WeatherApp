function MainHeader({ weather }) {
  return (
    <div className="Center-header">
      <h2>{weather.name}</h2>
    </div>
  );
}

export default MainHeader;
