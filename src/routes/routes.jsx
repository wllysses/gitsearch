import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detals } from "../pages/Detals";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/Detals/:login" element={<Detals />}/>
            </Routes>
        </BrowserRouter>
    )
}