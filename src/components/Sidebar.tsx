import { useState } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface clickSidebar{
    clicked: boolean;
    setSidebar: any;
}


export function Sidebar({clicked, setSidebar}: clickSidebar) {
    
    const { data } = useGetLessonsQuery()

    function handleClickSidebar(){
        setSidebar(!clicked);
    }

    return (
        <div className={`w-full overflow-auto h-full sm:h-auto sm:w-[348px] absolute top-auto block bg-gray-700 p-6 border-l border-gray-600 sm:translate-x-0 sm:relative ${clicked === true ? 'left-0' : 'translate-x-full'} transition`}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map( lesson => (  
                    <button onClick={handleClickSidebar} className="text-start">       
                    <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    />
                    </button>
                ))}
            </div>
        </div>
    )
}