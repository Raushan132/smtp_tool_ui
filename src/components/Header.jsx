import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {

    const navData = [
        { name: 'home', id: 1 },
        { name: 'about', id: 2 },
        { name: 'contact us', id: 3 },


    ]

    return (
        <>
            <nav className='flex justify-between px-8 py-4 shadow-2xl '>
                <div className='flex  justify-center items-center'>
                    <div>
                        <img src={logo} alt="logo" className='w-14' />
                    </div>
                    <div className='font-bold text-2xl text-blue-900'>
                        SMTP Tester Tool
                    </div>
                </div>
                <div className='flex gap-4 mx-2  '>
                    {
                        navData.map(data => <span key={data.id} className='uppercase cursor-pointer font-bold  text-xl hover:text-red-500 transition-all'>{data.name}</span>)
                    }
                </div>
            </nav>
        </>
    )
}

export default Header