import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-gray-900 h-80 text-white px-16 py-10'>
                <div className='grid grid-cols-4 mb-8'>
                    <div>
                        <div className='flex flex-col w-32 items-center justify-center '>
                            <div>
                                <img src={logo} alt="logo" className='w-14' />
                            </div>
                            <div className='font-bold text-xl text-white text-center' >
                                SMTP Tester Tool
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                            <div className='text-xl font-bold'>Categoies</div>
                            <div className='text-sm flex flex-col gap-2 text-gray-400'>
                                <div>Email Marking in Gmail</div>
                                <div>Email Newsletters in Gmail</div>
                                <div>Mail Merge in Gmail</div>
                                <div>Mass Email in Gmail</div>
                               
                            </div>
                    </div>
                    <div>About</div>
                    <div>Contact us</div>

                </div>
                <hr/>
                <div className='flex w-full justify-center m-2'>
                    &copy; 2025 Alex Rozard
                </div>
            </div>
        </>
    )
}

export default Footer