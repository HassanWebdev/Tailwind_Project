/* eslint-disable no-unused-vars */
import Landing_page from "./Components/Landing_page";
import Clinet from './Components/ClinetCommunity'
import ThreeComp from "./Components/threeComp";
import Forcomp from "./Components/forcomp";
import Fivecomp from "./Components/fivecomp";
import Sixcom from "./Components/sixcom";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const LocomotiveScrol = new LocomotiveScroll(); 
 
  return (
    <div className=" box-border overflow-hidden ">
      <Landing_page />
      <Clinet />
      <ThreeComp />
      <Forcomp />
      <Fivecomp />
      <Sixcom />
      <Footer />
    </div>
  );
}

export default App;
