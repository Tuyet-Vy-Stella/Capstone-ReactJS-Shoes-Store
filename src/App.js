import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
