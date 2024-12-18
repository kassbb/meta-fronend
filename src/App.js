import './App.css';
import Header from "./Header";
import Main from "./pages/Main";
import Footer from "./Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Special from "./components/Special";
import Booking from "./pages/Booking";

function App() {
    return (
        <>
            <BrowserRouter>

                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/special" element={<Special/>}/>
                    <Route path="/booking" element={<Booking/>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
