import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

function Sidebar() {
  return (
    <div className="sidebar">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default Sidebar;
