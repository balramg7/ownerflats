import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Dashboard from "./component/content/Dashboard";
import Login from "./component/content/Authentication/Login";
import Signup from "./component/content/Authentication/Signup";
import Info from "./component/content/FlatDetails/Info";
import AddPayment from "./component/content/FlatDetails/PaymentHistory'/AddPayment";
import AddRentHistory from "./component/content/FlatDetails/RentHistory/AddRentHistory";
import AddFlat from "./component/content/FlatDetails/AddFlat";
import AddRent from "./component/content/FlatDetails/RentHistory/AddRent";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/addpayment" element={<AddPayment />} />
                    <Route path="/addrenthistory" element={<AddRentHistory />} />
                    <Route path="/addflat" element={<AddFlat/>}/>
                    <Route path="/addrent" element={<AddRent/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
