import Navbar from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
import Footer from "./components/shared/Footer";


function App() {
  return (
    <div className="overflow-hidden">

      <Navbar />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/all-product' element={<AllProduct />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
