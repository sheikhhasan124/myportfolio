import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navber from "./Pages/Shared/Navber";


function App() {
  return (
    <div>
       {/* className="max-w-7xl mx-auto px-12" */}
     <Navber/>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
