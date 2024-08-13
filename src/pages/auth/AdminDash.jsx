import React, { useState } from 'react'
import Button from '../../components/Button'
import { GoPlusCircle } from 'react-icons/go'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import AddExams from '../../components/admin/AddExams';
import AddSubjects from '../../components/admin/AddSubjects';

const AdminDash = () => {

  return (
    <section className='min-h-dvh flex items-center py-5'>
      <div className="cont w-full">
        <h1 className='text-3xl font-bold mb-5'>Admin Dashboard</h1>
        <div className="grid grid-cols-2 justify-center gap-5">
          <div className="">
            <AddExams/>
            <AddSubjects/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminDash
