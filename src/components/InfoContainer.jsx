import React from 'react'

const InfoContainer = () => {
    return (
        <>
            <div className='flex flex-col w-1/3 gap-20 min-h-screen p-16 justify-center text-white bg-gradient-to-b  from-violet-950 via-blue-950 to-gray-900  '>
                <div>
                    <span className='text-5xl font-bold'>SMTP test <br /> tool</span>
                </div>
                <div className='text-sm'>
                    Test your connection to the SMTP server of your choice. See the exact SMTP "conversation" to help you troubleshoot email issues.
                </div>
                <div className=' flex flex-col justify-center  items-center px-10 py-4 gap-5 bg-gradient-to-b  from-blue-900 to-transparent rounded-2xl   '>
                    <div>
                        <span>
                            My Mail Tester:
                            Reliable SMTP service for your transactional emails
                        </span>
                    </div>
                    <div className='px-4 py-2 bg-red-500 text-white self-start cursor-pointer'>
                        Try for free
                    </div>

                </div>
            </div>
        </>
    )
}

export default InfoContainer