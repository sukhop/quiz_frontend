import React, { useState } from 'react'
import Button from '../Button'

const AddExams = () => {

    const [exam, setExam] = useState('');
    
    return (
        <div className="w-full py-6 px-6 border border-gray-200 rounded-2xl flex-shrink-0 mb-5 last:mb-0">
            <form action="">
                <label htmlFor="exam" className='block text-sm mb-2 font-medium'>Create Exam</label>
                <input type="text" id='exam' name='exam' className='block border border-slate-200 focus:outline-none w-full px-3 py-2 rounded-md h-10 placeholder:text-sm' placeholder='Enter exam name' required />
                <Button className='mt-5 ml-0'>Create exam</Button>
            </form>
        </div>
    )
}

export default AddExams
