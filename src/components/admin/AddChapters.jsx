import React, { useEffect, useState } from 'react'
import { GoPlusCircle } from 'react-icons/go';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Button from '../Button';
import axios from 'axios';

const AddChapter = () => {

    const [data, setData] = useState([]);
    const [subData, setSubData] = useState([]);
    const [pageID, setPageID] = useState();
    const [chapID, setChapID] = useState();
    const [inputs, setInputs] = useState([{ chapterName: "" }]);

    const handleAddInput = () => {
        setInputs([...inputs, { chapterName: "" }]);
    };

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
    };

    const handleDeleteInput = (index) => {
        const newArray = [...inputs];
        newArray.splice(index, 1);
        setInputs(newArray);
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URI}/exams/get-exams`, {
            headers: {
                Accept: '*/*',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(response => {
                setData(response.data.exams);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const handlePageID = (event) => {
        setPageID(event.target.value);
        axios.get(`${import.meta.env.VITE_BACKEND_API_URI}/subjects/${event.target.value}/get-subjects`, {
            headers: {
                Accept: '*/*',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(response => {
                setSubData(response.data.subjects);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleChapID = (event) => {
        setChapID(event.target.value);
    }

    const handleAddChap = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_API_URI}/chapters/${chapID}/add-chapters`, inputs, {
                headers: {
                    Accept: '*/*',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })

            console.log(response);
        } catch (error) {
            console.error('Error updating data', error);
        }
    }

    console.log(inputs)

    return (
        <div className="w-full py-6 px-6 border border-gray-200 rounded-2xl flex-shrink-0 mb-5 last:mb-0">
            <form action="" method='post' className=''>
                <div className="mb-4">
                    <label htmlFor="pageName" className='block text-sm mb-2 font-medium'>Select Exam</label>
                    <select name="exams" id="exams" className='appearance-none block border border-slate-200 focus:outline-none w-full px-3 py-2 rounded-md h-10 placeholder:text-sm' onChange={handlePageID}>
                        <option value="" hidden>Select Exam</option>
                        {data && (
                            data.map((el, idx) => {
                                return (
                                    <option value={el._id} key={idx}>{el.pageName}</option>
                                )
                            })
                        )}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="pageName" className='block text-sm mb-2 font-medium'>Select Subject</label>
                    <select name="exams" id="exams" className='appearance-none block border border-slate-200 focus:outline-none w-full px-3 py-2 rounded-md h-10 placeholder:text-sm' onChange={handleChapID}>
                        <option value="" hidden>Select Subject</option>
                        {subData && (
                            subData.map((el, idx) => {
                                return (
                                    <option value={el._id} key={idx}>{el.subjectName}</option>
                                )
                            })
                        )}
                    </select>
                </div>
                <div className="">
                    <div className="">
                        <label htmlFor="chapterName" className='block text-sm mb-2 font-medium'>Add Chapters</label>
                        {inputs.map((item, index) => (
                            <div className="flex gap-3 items-center mb-3 last:mb-0" key={index}>
                                <input type="text" id={`chapterName${index}`} name='chapterName' className='block border border-slate-200 focus:outline-none w-full px-3 py-2 rounded-md h-10 placeholder:text-sm' placeholder='Enter chapters name' required onChange={(event) => handleChange(event, index)} />
                                {inputs.length > 1 && (
                                    <button className='h-10 w-10 flex items-center justify-center flex-shrink-0 bg-red-600 rounded-md text-white' onClick={() => handleDeleteInput(index)}>
                                        <IoIosCloseCircleOutline size={20} />
                                    </button>
                                )}
                                {index === inputs.length - 1 && (
                                    <button className='h-10 w-10 flex items-center justify-center flex-shrink-0 bg-black rounded-md text-white' onClick={() => handleAddInput()}>
                                        <GoPlusCircle size={20} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <Button className='mt-5 ml-0' onClick={handleAddChap} type='button'>Add chapter</Button>
            </form>
        </div>
    )
}

export default AddChapter
