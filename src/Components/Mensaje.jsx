// Mensaje.jsx
import React from "react";

export const Mensaje = ({ Dia }) => {
    return (
        <div className="text-center py-8 bg-[#17181D]">
            <h1 className="text-3xl font-bold text-[#FCD9B8]">
                Hoy toca estos ejercicios del día {Dia}
            </h1>
            <p className="text-lg text-[#FCD9B8] mt-4">
                Recuerda correr 30 segundos con 3 repeticiones 
            </p>
        </div>
    );
};
