import React from 'react';
import WorkImgmg from '../assets/projects/workImg.jpeg';
import RealEstate from '../assets/projects/realestate.jpg';
import TodoList from '../assets/projects/todolist.png';
import SistemaEstoque from '../assets/projects/sistema-estoque.png';
import FoodEat from '../assets/projects/food-eat.png'

const Projects = () => {
    return (
        <div name='projects' className='w-ful md:h-screen text-slate-300 bg-[#334456]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 '>Projects</p>
                    <p className='py-6'>// Veja alguns dos meus projetos recentes.</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3  md:gap-4 gap-6'>
                    
                    {/* Grid item */}

                        <div style={{ backgroundImage: `url(${FoodEat})`, padding: '20px' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Aplicação React JS
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='bg-white px-4 py-3 m-3 text-center text-gray-700 font-bold text-lg rounded-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='bg-white px-4 py-3 m-3 text-center text-gray-700 font-bold text-lg rounded-lg'>Código</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${RealEstate})`, padding: '20px' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Aplicação React JS
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='bg-white px-4 py-3 m-3 text-center text-gray-700 font-bold text-lg rounded-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='bg-white px-4 py-3 m-3 text-center text-gray-700 font-bold text-lg rounded-lg'>Código</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${TodoList})`, padding: '20px' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Aplicação React JS
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='bg-white px-4 py-3 m-3 text-center text-gray-700 font-bold text-lg rounded-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='bg-white px-4 py-3 m-3 text-center text-gray-700 font-bold text-lg rounded-lg'>Código</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${SistemaEstoque})`, padding: '20px' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Aplicação React JS
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='bg-white px-4 py-3 m-3 text-center text-gray-700 font-bold text-lg rounded-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='bg-white px-4 py-3 m-3 text-center text-gray-700 font-bold text-lg rounded-lg'>Código</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    {/* Adicione mais itens de grade conforme necessário */}
                    
                </div>
            </div>
        </div>
    );
}

export default Projects;
