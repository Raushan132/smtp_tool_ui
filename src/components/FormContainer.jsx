import React, { useState } from 'react'
import customFormData from '../utils/formData';
import axios from 'axios';

const FormContainer = () => {
  

    const [formData,setFormData]=useState(customFormData)


    const handleChangeValue = (e)=>{
     
        setFormData(formData.map(data=>{
                if(data.id==e.target.id){
                  data.value= e.target.value;}
                return data;
        }))
       
       
    }

    const handleSubmit = async ()=>{
        const data= formData.map(d=>({[d.data_bind]:d.value}))
        try{
            const resp=  await axios.post(`${BaseUrl}/smpt`,data)
            console.log(resp)
        }catch(err){
            console.log(err)
        }
      
    }

    return (
        <>

            <div className='flex flex-col gap-5 justify-center items-center'>
                <div className='self-start flex gap-2 items-center ' >
                    <div >Generate Gmail App Password<span className='text-blue-400'>*</span></div>
                    <div className='px-4 py-2 bg-red-500 text-white font-bold cursor-pointer'>Generate</div>
                </div>
                {
                    formData.map(data => {
                        return (
                            <div key={data.id} className='flex flex-col gap-2'>
                                <div className='font-bold'>{data.name}:</div>
                                <div>
                                    <input type={data.type} onChange={handleChangeValue} className='border-2 border-black h-10 w-[600px] px-2' value={data.value} id={data.id}  />
                                </div>
                            </div>
                        );
                    })
                }

                <div className=' flex items-center text-white font-bold self-start '>
                    <div className='px-4 py-2 bg-blue-600 rounded-md cursor-pointer' onClick={handleSubmit}> Submit</div>
                </div>
            </div>
        </>
    )
}

export default FormContainer