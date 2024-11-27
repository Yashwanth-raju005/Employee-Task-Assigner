/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-400 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescripton}</p>
            <div className='mt-4'>
                <button className='bg-yellow-500 border-2 text-black' >Accept Task</button>
            </div>
    </div>
  )
}

export default NewTask