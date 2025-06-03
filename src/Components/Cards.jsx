// Cards.jsx
import React from "react";

export const Cards = ({ numero, video, Serie, Repeticion }) => {
    return (
        <div className="bg-[#292C35] rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">
        <h2 className="text-lg font-semibold text-[#E09145] mb-2">
            Ejercicio #{numero}
        </h2>
        <h2 className="text-base font-semibold text-[#E09145] mb-2">
            Series {Serie} -  Repeticiones {Repeticion}
        </h2>
        <video
            src={video}
            controls
            className="w-full rounded-lg border border-[#FCD9B8]"
        />
        </div>
    );
};
