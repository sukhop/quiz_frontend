import React, { useEffect, useState } from 'react'
// import CatCard from '../components/CatCard'
// import Quiz from './Quiz'
// import { jsQuiz } from '../constants'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Homepage = () => {

  const [data, setData] = useState([]);
  // const [exams, setExams] = useState([]);

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


  return (
    <section className='homepage min-h-dvh h-full flex items-center py-5'>
      <div className="cont">
        {/* <Quiz questions={jsQuiz.questions} /> */}
        <h1 className='text-center mb-5 text-3xl font-bold '>Exams</h1>
        <div className="exams-wrap flex flex-wrap justify-center gap-5">
          {data ? (
            data.map((el, idx) => {
              return (
                <Link to={`/exam/${el._id}`} className='inline-flex leading-none px-8 py-3 bg-prime text-white rounded-full' key={idx}>
                  {el.pageName}
                </Link>
              )
            })
          ) : (
            <p>
              No data found
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Homepage
