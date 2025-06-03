import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <nav className="bg-[#17181D] p-4 shadow-md border-b border-[#E09145]">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Título o logo */}
            <div className="text-[#FCD9B8] text-xl font-bold">Rutinas Fit</div>

            {/* Menú para pantallas medianas en adelante */}
            <div className="hidden md:flex space-x-6">
                <Link
                to="/"
                className="text-[#FCD9B8] hover:text-white hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                >
                Inicio
                </Link>
                <Link
                to="/Lunes"
                className="text-[#FCD9B8] hover:text-white hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                >
                Lunes
                </Link>
                <Link
                to="/Martes"
                className="text-[#FCD9B8] hover:text-white hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                >
                Martes
                </Link>
                <Link
                to="/Miercoles"
                className="text-[#FCD9B8] hover:text-white hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                >
                Miércoles
                </Link>
                <Link
                to="/Jueves"
                className="text-[#FCD9B8] hover:text-white hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                >
                Jueves
                </Link>
            </div>

            
            <div className="md:hidden">
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[#FCD9B8] text-2xl focus:outline-none"
                >
                ☰
                </button>
            </div>
            </div>

            
            {menuOpen && (
            <div className="mt-2 md:hidden flex flex-col space-y-2">
                <Link
                to="/"
                className="text-[#FCD9B8] hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                onClick={() => setMenuOpen(false)}
                >
                Inicio
                </Link>
                <Link
                to="/Lunes"
                className="text-[#FCD9B8] hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                onClick={() => setMenuOpen(false)}
                >
                Lunes
                </Link>
                <Link
                to="/Martes"
                className="text-[#FCD9B8] hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                onClick={() => setMenuOpen(false)}
                >
                Martes
                </Link>
                <Link
                to="/Miercoles"
                className="text-[#FCD9B8] hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                onClick={() => setMenuOpen(false)}
                >
                Miércoles
                </Link>
                <Link
                to="/Jueves"
                className="text-[#FCD9B8] hover:bg-[#E09145] px-3 py-2 rounded-md transition"
                onClick={() => setMenuOpen(false)}
                >
                Jueves
                </Link>
            </div>
            )}
        </nav>
        </>
    );
};
