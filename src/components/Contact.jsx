import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#334456] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/BeXg1kdy" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-slate-200'>Contact</p>
                    <p className='text-gray-300 py-4'>// Por favor, envie o formulário abaixo ou entre em contato por e-mail. - walvespereira96@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 font-bold hover:bg-[#e71e49] hover:border-[#e71e49] px-4 py-3 my-8 mx-auto flex items-center'>Vamos trabalhar juntos</button>
            </form>
        </div>
    )
}

export default Contact