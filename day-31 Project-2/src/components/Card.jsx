import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
import Button from "./Button";

function Card({ widthClass, start, para, hover='' }) {
    return (
        <div className={`bg-zinc-800 p-4 rounded-md hover:${hover} transition-all duration-300 ease-in-out ${widthClass || ''}`}>
            <div className="flex flex-col justify-between h-full">
                <div className="up">
                    <div className="flex justify-between items-center">
                        <h3>One Small Heading</h3>
                        <IoMdArrowForward />
                    </div>
                    <h1 className="text-2xl font-medium mt-3">Card main Heading</h1>
                </div>
                <div className="down mt-40 ">
                    {start === true && (
                        <>
                            <h1 className="text-5xl font-medium tracking-tight mb-4 ">Start a project</h1>
                            <Button />
                        </>
                    )}
                    {para === true && (
                        <p className="text-sm text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card