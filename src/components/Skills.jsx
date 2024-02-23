import React from 'react'

// imgs
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full  bg-[#334456] text-slate-200'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 lg:h-screen flex flex-col justify-center items-center w-full'>
                <div>
                    <p className='lg:text-4xl text-2xl font-bold inline border-b-4 '>Skills</p>
                    <p className='py-6'>// Estas são as tecnologias com as quais eu tenho conhecimento.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-7'>
                        <img className='w-20 mx-auto py-4' src={HTML} alt="HTML icon" />
                        <p className='my-2'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-7'>
                        <img className='w-20 mx-auto py-4' src={CSS} alt="CSS icon" />
                        <p className='my-2'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-7'>
                        <img className='w-20 mx-auto py-4' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-2'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-7'>
                        <img className='w-20 mx-auto py-4' src={ReactImg} alt="React icon" />
                        <p className='my-2'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-7'>
                        <img className='w-20 mx-auto py-4' src={Node} alt="Node icon" />
                        <p className='my-2'>Node</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-7'>
                        <img className='w-20 mx-auto py-4' src={GitHub} alt="GitHub icon" />
                        <p className='my-2'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-7'>
                        <img className='w-20 mx-auto py-4' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-2'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-7'>
                        <img className='w-20 mx-auto py-4' src={Mongo} alt="Mongo icon" />
                        <p className='my-2'>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
