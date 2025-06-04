import React from "react";
import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom"; 

export const MainPages = () => {
    return (
        <div className="bg-[#17181D] min-h-screen text-[#FCD9B8]">
        <Navbar />
        <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Potencia tu cuerpo
            <br />
            con <span className="text-[#E09145]">pliometría</span>
            </h1>

            <p className="text-lg max-w-2xl mb-8">
            La pliometría combina fuerza, velocidad y agilidad para llevar tu
            rendimiento al siguiente nivel. Mejora tus saltos, tu explosividad y
            tu control corporal con rutinas diseñadas para desafiarte.
            </p>

            <Link
            to="/Lunes"
            className="bg-[#E09145] text-[#17181D] font-semibold px-6 py-3 rounded-full hover:bg-[#FCD9B8] transition duration-300"
            >
            Comenzar ahora
            </Link>
        </main>
        </div>
    );
};
