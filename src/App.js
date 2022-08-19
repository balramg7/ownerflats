import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Dashboard from "./component/content/Dashboard";
import Login from "./component/content/Authentication/Login";
import Signup from "./component/content/Authentication/Signup";
import Info from "./component/content/FlatDetails/Info";
import PaymentDetails from "./component/content/FlatDetails/PaymentDetails";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/info" element={<Info />} />
                    <Route
                        path="/paymentdetails"
                        element={<PaymentDetails />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
