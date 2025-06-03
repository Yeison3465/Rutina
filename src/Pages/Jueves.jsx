import React from "react";
import { Navbar } from "../Components/Navbar";
import { Mensaje } from "../Components/Mensaje";
import { Cards } from "../Components/Cards";

export const Jueves = () => {
    return (
        <div className="bg-[#17181D] min-h-screen">
        <Navbar />
        <Mensaje Dia="Jueves" />
            <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Cards
                numero={1}
                video="public/Videos/Jueves/0540.mp4"
                Serie={3}
                Repeticion={15}
                />
                <Cards
                numero={2}
                video="public/Videos/Jueves/0541.mp4"
                Serie={3}
                Repeticion={20}
                />
                <Cards
                numero={3}
                video="public/Videos/Jueves/0542.mp4"
                Serie={3}
                Repeticion={10}
                />
                <Cards
                numero={4}
                video="public/Videos/Jueves/0545.mp4"
                Serie={2}
                Repeticion={12}
                />
                <Cards
                numero={5}
                video="public/Videos/Jueves/0546.mp4"
                Serie={3}
                Repeticion={10}
                />
                <Cards
                numero={6}
                video="public/Videos/Jueves/0547.mp4"
                Serie={3}
                Repeticion={10}
                />
                <Cards
                numero={7}
                video="public/Videos/Jueves/0548.mp4"
                Serie={2}
                Repeticion={10}
                />
                <Cards
                numero={8}
                video="public/Videos/Jueves/0549.mp4"
                Serie={2}
                Repeticion={12}
                />
                <Cards
                numero={9}
                video="public/Videos/Jueves/0551.mp4"
                Serie={2}
                Repeticion={8}
                />
                <Cards
                numero={10}
                video="public/Videos/Jueves/0553.mp4"
                Serie={2}
                Repeticion={12}
                />
                <Cards
                numero={11}
                video="public/Videos/Jueves/0559.mp4"
                Serie={2}
                Repeticion={8}
                />
            </div>
        </div>
    );
};
