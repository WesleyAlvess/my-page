import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full bg-[#334456] text-slate-200'>
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='lg:text-4xl text-3xl font-bold inline border-b-4 border-slate-200'>About</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <div className='lg:text-1xl text-2xl font-bold'>
                            <p>Olá, Eu sou o Wesley, é um prazer conhecê-lo! Deixe-me compartilhar um pouco mais sobre mim.</p>
                        </div>
                    </div>
                    <div>
                        <p className='lg:mb-0 mb-[-55px]'>
                            Apaixonado por tecnologia desde pequeno,
                            sou um desenvolvedor que adora desafios.
                            Sempre busco me aprimorar e aprender com situações que me tiram da zona de conforto.
                            Estou constantemente buscando aprimoramento e nunca deixo de aproveitar um bom café 
                            durante minha jornada de desenvolvimento, enquanto contribuo de forma inovadora tanto 
                            para projetos frontend quanto backend. Além disso, mantenho um estilo de vida ativo e saudável, pois acredito
                            que uma mente saudável depende também de um corpo saudável.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
