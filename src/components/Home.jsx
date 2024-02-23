import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#334456] flex justify-center items-center'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                {/* <p className='text-slate-300'>Olá,👋 Eu sou o Wesley</p> */}
                <h1 className='lg:text-8xl md:text-6xl text-[35px] lg:mb-[-15px] md:mb-[-5px] sm:mb-[-15px] mb-[-18px] font-bold text-white'>FULL STACK</h1>
                <h1 className='lg:text-9xl md:text-7xl text-[45px] font-bold text-white'>DEVELOPER</h1>
                <p className='text-slate-300 lg:text-xl text-sm py-3'>"Construindo pontes entre front-end e back-end."</p>

                <div>
                    <Link to="skills" smooth={true} duration={500}>
                        <button className='text-white font-bold sm:py-3 sm:px-6 sm:text-sm text-[12px] group border-2 px-4 py-2 my-2 flex justify-center items-center hover:bg-[#e71e49] hover:border-[#e71e49]'>Skills
                            <span className='group-hover:rotate-90 duration-300' >
                                <HiArrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
