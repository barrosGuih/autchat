import React from "react";
import Fundo from "./componentes/fundo";
import Login from "./componentes/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Fundo/>}></Route>
                <Route path="/login" element={<Login/>}></Route>

            </Routes>
        </Router>

    )
}

export default AppRoutes;