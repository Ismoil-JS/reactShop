import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import Auth from "./routes/auth/Auth";
import { Routes, Route } from "react-router-dom";
import Register from "./routes/auth/register/Register";
import Login from "./routes/auth/login/Login";
import Product from "./routes/product/Product";
import Announcement from "./components/announcement/Announcement";
import Like from "./routes/like/Like";
import FooterTop from "./components/footer/footer-top/FooterTop";
import About from "./components/footer/about-site/About";
import FooterService from "./components/footer/services/FooterService";

function App() {
  return (
    <>
      <Announcement/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/like" element={<Like/>}/>
        <Route path="/auth" element={<Auth/>}>
          <Route path="/auth/login" element={<Login/>}></Route>
          <Route path="/auth/register" element={<Register/>}></Route>
        </Route>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
      <FooterTop/>
      <About/>
      <FooterService/>
    </>
  );
}

export default App;
