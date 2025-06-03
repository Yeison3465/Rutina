import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Lunes } from "../Pages/Lunes";
import { Miercoles } from "../Pages/Miercoles";
import { Jueves } from "../Pages/Jueves";
import { Martes } from "../Pages/Martes";
import { MainPages } from "../Pages/MainPages";

export const Routers = () => {
    return (
        <>
        <Routes>
            <Route path="Lunes" element={<Lunes />} />
            <Route path="Martes" element={<Martes />} />
            <Route path="Miercoles" element={<Miercoles />} />
            <Route path="Jueves" element={<Jueves />} />
            <Route path="" element={<MainPages/>} />
            <Route path="/*" element={<MainPages/>} />
        </Routes>
        </>
    );
};
