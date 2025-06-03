import React from "react";
import { Navbar } from "../Components/Navbar";
import { Mensaje } from "../Components/Mensaje";
import { Cards } from "../Components/Cards";

export const Martes = () => {
    return (
        <div className="bg-[#17181D] min-h-screen">
        <Navbar />
        <Mensaje Dia="Martes" />
            <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Cards
                numero={1}
                video="src/assets/Videos/Martes/0529.mp4"
                Serie={3}
                Repeticion={15}
                />
                <Cards
                numero={2}
                video="src/assets/Videos/Martes/0530.mp4"
                Serie={3}
                Repeticion={20}
                />
                <Cards
                numero={3}
                video="src/assets/Videos/Martes/0531.mp4"
                Serie={3}
                Repeticion={10}
                />
                <Cards
                numero={4}
                video="src/assets/Videos/Martes/0532.mp4"
                Serie={2}
                Repeticion={12}
                />
                <Cards
                numero={5}
                video="src/assets/Videos/Martes/0533.mp4"
                Serie={3}
                Repeticion={12}
                />
                <Cards
                numero={6}
                video="src/assets/Videos/Martes/0557.mp4"
                Serie={3}
                Repeticion={20}
                />
                <Cards
                numero={7}
                video="src/assets/Videos/Martes/0558.mp4"
                Serie={2}
                Repeticion={7}
                />
                <Cards
                numero={8}
                video="src/assets/Videos/Martes/0559.mp4"
                Serie={2}
                Repeticion={8}
                />
            </div>
        </div>
    );
};
