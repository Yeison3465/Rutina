
import { Navbar } from '../Components/Navbar'
import React from 'react'
import { Cards } from '../Components/Cards'
import { Mensaje } from '../Components/Mensaje'

export const Miercoles = () => {
    return (
        <div className="bg-[#17181D] min-h-screen">
            <Navbar />
            <Mensaje Dia="Miercoles" />
            <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Cards numero={1} video="public/Videos/Miercoles/0548.mp4" Serie={3} Repeticion={10}/>
                <Cards numero={2} video="public/Videos/Miercoles/0535.mp4" Serie={3} Repeticion={20}/>
                <Cards numero={3} video="public/Videos/Miercoles/0537.mp4" Serie={3} Repeticion={10} />
                <Cards numero={4} video="public/Videos/Miercoles/0538.mp4" Serie={2} Repeticion={10}/>
                <Cards numero={5} video="public/Videos/Miercoles/0534.mp4" Serie={3}  Repeticion={15}/>
                <Cards numero={6} video="public/Videos/Miercoles/0539.mp4" Serie={3} Repeticion={15}/>
                <Cards numero={7} video="public/Videos/Miercoles/0551.mp4" Serie={3} Repeticion={8}/>
                <Cards numero={8} video="public/Videos/Miercoles/0552.mp4" Serie={2} Repeticion={7}/>
                <Cards numero={9} video="public/Videos/Miercoles/0559.mp4" Serie={2} Repeticion={8}/>
            </div>
        </div>
    )
}
