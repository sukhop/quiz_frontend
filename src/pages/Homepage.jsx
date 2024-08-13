import React, { useEffect, useState } from 'react'
import CatCard from '../components/CatCard'
import Quiz from './Quiz'
import { jsQuiz } from '../constants'
import axios from 'axios'

const Homepage = () => {

  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/get-exams')
    .then(response => {
      setExams(response.data)
    })
    .catch(error => {
      console.error(error);
    })
  }, [])

  return (
    <section className='homepage min-h-dvh h-full flex items-center py-5'>
      <div className="cont">
        {/* <Quiz questions={jsQuiz.questions} /> */}
      </div>
    </section>
  )
}

export default Homepage
