import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Subject = () => {
  const { id } = useParams()

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_BACKEND_API_URI}/subjects/${id}/get-subjects`, {
//       headers: {
//         Accept: '*/*',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       }
//     })
//       .then(response => {
//         setData(response.data.subjects);
//       })
//       .catch(error => {
//         console.error(error);
//       })
//   }, [])

  return (
    <div className='exam_wrap min-h-dvh h-full flex items-center py-5'>
      <div className="cont">
        {/* Exam {id} */}
        <h1 className='text-center mb-5 text-3xl font-bold '>{id}'s Chapters</h1>
        {/* <div className="exams-wrap flex flex-wrap justify-center gap-5">
          {data ? (
            data.map((el, idx) => {
              return (
                <Link to={`/subjects/${el._id}`} className='inline-flex leading-none px-8 py-3 bg-prime text-white rounded-full' key={idx}>
                  {el.subjectName}
                </Link>
              )
            })
          ) : (
            <p>
              No data found
            </p>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Subject
