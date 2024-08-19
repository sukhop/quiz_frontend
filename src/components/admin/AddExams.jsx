import React, { useState } from 'react'
import Button from '../Button'
import axios from 'axios';

const AddExams = () => {

    const [exam, setExam] = useState({pageName: ''});

    const handleExam = (event) => {
        setExam({pageName: event.target.value});
    }

    console.log(exam)

    const handleCreateExam = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URI}/exams/create-exam`, exam, {
                headers: {
                    Accept: '*/*',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full py-6 px-6 border border-gray-200 rounded-2xl flex-shrink-0 mb-5 last:mb-0">
            <form action="" method='post'>
                <label htmlFor="exam" className='block text-sm mb-2 font-medium'>Create Exam</label>
                <input type="text" id='exam' name='exam' className='block border border-slate-200 focus:outline-none w-full px-3 py-2 rounded-md h-10 placeholder:text-sm' placeholder='Enter exam name' required onChange={handleExam} />
                <Button className='mt-5 ml-0' type='button' onClick={handleCreateExam}>Create exam</Button>
            </form>
        </div>
    )
}

export default AddExams
