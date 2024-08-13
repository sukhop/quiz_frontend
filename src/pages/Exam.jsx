import React from 'react'
import { useParams } from 'react-router-dom'

const Exam = () => {
const {id} =useParams()


  return (
    <div>
      Exam {id}
    </div>
  )
}

export default Exam
