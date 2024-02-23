import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#334456] text-gray-300">
            <div>
                <img style={{width:'100px'}} src={Logo} alt="Logo" />
            </div>

            {/* Menu */}

            <div className='hidden md:flex gap-8 '>
    <button className='inline group'>
        <Link
            to="home"
            smooth={true}
            duration={500}
            className='hover:border-b border-transparent border-b-[#e71e49] block w-full h-full'
        >
            Home
        </Link>
    </button>
    <button className='inline group'>
        <Link
            to="about"
            smooth={true}
            duration={500}
            className='hover:border-b border-transparent border-b-[#e71e49] block w-full h-full'
        >
            About
        </Link>
    </button>
    <button className='inline group'>
        <Link
            to="skills"
            smooth={true}
            duration={500}
            className='hover:border-b border-transparent border-b-[#e71e49] block w-full h-full'
        >
            Skills
        </Link>
    </button>
    <button className='inline group'>
        <Link
            to="projects"
            smooth={true}
            duration={500}
            className='hover:border-b border-transparent border-b-[#e71e49] block w-full h-full'
        >
            Projects
        </Link>
    </button>
    <button className='inline group'>
        <Link
            to="contact"
            smooth={true}
            duration={500}
            className='hover:border-b border-transparent border-b-[#e71e49] block w-full h-full'
        >
            Contact
        </Link>
    </button>
</div>



            {/* Menu Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#334456] flex flex-col justify-center items-center"}>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to="projects"
                        smooth={true}
                        duration={500}
                    >
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-blue-600'>
                        <a className='flex justify-between item-center w-full text-white' href="https://www.linkedin.com/in/wesley-alves-pereira-27496920a/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#333333]'>
                        <a className='flex justify-between item-center w-full text-white ' href="https://github.com/WesleyAlvess">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#6fc2b0]'>
                        <a className='flex justify-between item-center w-full text-white ' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;