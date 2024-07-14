import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rotina from "./pages/Rotina";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/Login" element={ <Login /> }></Route>
                <Route path="/Rotina" element={ <Rotina /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;