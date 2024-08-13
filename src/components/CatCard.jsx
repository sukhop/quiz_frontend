import React from 'react'

const CatCard = ({name, source}) => {
  return (
    <div className='category_card'>
        <img src={{source}} alt="" />
        <h6>{{name}}</h6>
    </div>
  )
}

export default CatCard
