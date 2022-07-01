import { ArrowSquareUpRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useState } from 'react'

export function Event(){

    const { slug } = useParams<{ slug: string }>()

    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header setSidebar={setSidebar} viewSidebar={sidebar}/>
            <main className="flex flex-1">
                { slug ? <Video lessonSlug={slug}/> : 
                <div className="flex flex-1 justify-center items-center text-center gap-4 text-gray-200">
                    <h1 className="text-lg  sm:text-[2.5rem] leading-tight">
                        Selecione uma aula para assistir
                    </h1>
                    <ArrowSquareUpRight size={32}/>
                </div>}
                <Sidebar clicked={sidebar} setSidebar={setSidebar} />
            </main>
        </div>
    )
}