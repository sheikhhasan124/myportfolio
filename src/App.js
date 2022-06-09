import { Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/Home/AboutMe";
import Contactme from "./Pages/Home/Contactme";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Home/Projects";
import Footer from "./Pages/Shared/Footer";
import Navber from "./Pages/Shared/Navber";


function App() {
  return (
    <div  className="max-w-7xl mx-auto px-12">
       {/* className="max-w-7xl mx-auto px-12" */}
     <Navber/>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/about" element={<AboutMe/>}></Route>
       <Route path="/service" element={<Projects/>}></Route>
       <Route path="/contact" element={<Contactme/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
