import React, { useState } from 'react'
import customFormData from '../utils/formData';
import axios from 'axios';
import BaseUrl from '../utils/baseUrl';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';


const FormContainer = () => {


    const [formData, setFormData] = useState(customFormData)

   const commands = [
        {
            content:'Hello User Welecome to SMTP Tester tool',
            classBinding:'text-white'
        },
        {
            content:'Your Mail Congiration is starting',
            classBinding:'text-green-500 '
        },
        {
            content:'Your Mail Congiration is Validation',
            classBinding:'text-yellow-400'
        },
    ]
    const[consoleData,setConsoleDate] = useState(commands)
    const[flag,setFlag] = useState(false);


    const handleChangeValue = (e) => {

        setFormData(formData.map(data => {
            if (data.id == e.target.id) {
                data.value = e.target.value;
            }
            return data;
        }))


    }

    const handleSubmit = async () => {
        const data = {};
        setFlag(true);

        formData.forEach(d => {

            data[d.data_bind] = d.value;

        });
        console.log(data);
        data.port = parseInt(data.port)
        try {
            const resp = await axios.post(`${BaseUrl}/smtp`, data);
            setConsoleDate(prev=>[...prev,{content:'Your Test Mail is send',classBinding:'text-geen-400'}])
            
        } catch (err) {
            console.log(err);
            setConsoleDate(prev=>[...prev,{content:'Your Test Mail is failed',classBinding:'text-red-400'}])
        }
    };


    return (
        <>

            <div className='flex flex-col gap-5 justify-center items-center'>
                <div className='self-start flex gap-2 items-center ' >
                    <div >Generate Gmail App Password<span className='text-blue-400'>*</span></div>
                    <Link to={"https://myaccount.google.com/apppasswords"} className='px-4 py-2 bg-red-500 text-white font-bold cursor-pointer'>Generate</Link>
                </div>
                {
                    formData.map(data => {
                        return (
                            <div key={data.id} className='flex flex-col gap-2'>
                                <div className='font-bold'>{data.name}:</div>
                                <div>
                                    <input type={data.type} onChange={handleChangeValue} className='border-2 border-black h-10 w-[600px] px-2' value={data.value} id={data.id} />
                                </div>
                            </div>
                        );
                    })
                }

                <div className=' flex items-center text-white font-bold self-start '>
                    <div className='px-4 py-2 bg-blue-600 rounded-md cursor-pointer' onClick={handleSubmit}> Submit</div>
                </div>


            </div>
          { flag && <div className='w-full fixed z-50 top-0  bg-gray-500 bg-opacity-60 h-screen overflow-hidden'>

                <div className='w-1/2 bg-white h-[80%] absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex justify-end'>
                        <MdClose size={36} className='text-red-500 cursor-pointer' onClick={()=>setFlag(false)} />
                    </div>
                    <div>
                        <div>Console Data Analysis</div>
                        <div className='bg-black text-white flex flex-col p-2 self-center mx-10 my-10 h-96 '>
                                {
                                    consoleData.map(cldata=>{
                                        return <div>
                                                <span>&gt;</span>
                                                <span className={cldata.classBinding}>{cldata.content}</span>
                                        </div>
                                    })
                                }
                        </div>

                    </div>
                </div>
            </div>}
        </>
    )
}

export default FormContainer