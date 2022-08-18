import "./App.css";
// import Card from "./component/Card";
// import Table from "./component/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Dashboard from "./component/content/Dashboard";
import Login from "./component/content/Authentication/Login";
import Signup from "./component/content/Authentication/Signup";
import Info from "./component/content/FlatDetails/Info";

function App() {
    return (
        <>
             
            <BrowserRouter>
            <Header />
           <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/> 
            <Route path="/info" element={<Info/>}/>
           </Routes>
            </BrowserRouter> 
            {/* <div className="container my-3 mx-2">
                <Card />
            </div>
            <div className="container">
                <Table />
            </div>  */}
            {/* <Header/> */}
            
        </>
    );
}

export default App;
