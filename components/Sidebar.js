import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import { useRecoilState } from "recoil";
import { weatherAtoms, weatherIdState } from "../atoms/weatherAtoms";

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
