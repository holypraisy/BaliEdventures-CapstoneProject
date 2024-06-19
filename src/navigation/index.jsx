import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "../components/AppBar";
import Home from "../pages/Home/index.jsx";
import SignIn from "../pages/SignIn/index.jsx";
import SignUp from "../pages/SignUp/index.jsx";
import Trip from "../pages/Trip/index.jsx";
import About from "../pages/About/index.jsx";
import Booking from "../pages/Booking/index.jsx";
import PaymentSuccess from "../pages/PaymentSuccess/index.jsx";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlices.js";
import Footer from "../components/Footer.jsx";
import Detail from "../pages/Detail/index.jsx";

export default function Navigation() {
    const productsInCart = useSelector(cartProducts);

    return (
        <BrowserRouter>
            <AppBar cartCount={productsInCart ? productsInCart.length : 0} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trip/:id" element={<Detail />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/trip" element={<Trip />} />
                <Route path="/about" element={<About />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
