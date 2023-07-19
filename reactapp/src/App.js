import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { Contact } from "./pages/contact";
import { LoginForm } from "./pages/login/login";
import { RegistrationForm } from "./pages/login/register";
import Offers from "./components/offers";
import Concert from "./components/concert";
import TheaterList from "./components/TheaterList";
import EventBookingPage from "./components/Concertbooking";
import ProfilePage from "./components/profile";
import Seat from "./components/seat";
// import { Payment } from "./components/payment";




function App() {
  return (
    <div className="App">
      {/* <ShopContextProvider> */}
      {/* <Navbar /> */}
        {/* <Router> */}
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/concert" element={<Concert />} />
            <Route path="/TheaterList" element={<TheaterList />} />
            <Route path="/concertbooking" element={<EventBookingPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/seat" element={<Seat/>} />
            {/* <Route path="/payment" element={<Payment/>} /> */}



          </Routes>
        {/* </Router> */}
      {/* </ShopContextProvider> */}
    </div>
  );
}

export default App;
