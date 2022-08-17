import "./App.css";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import Table from "./component/Table";

function App() {
    return (
        <>
            <Navbar />
            <div className="container my-3 mx-2">
                <Card />
            </div>
            <div className="container">
                <Table />
            </div>
        </>
    );
}

export default App;
