import React from 'react'

const Choice = ({ option, checked }) => {
    return (
        <>
            {/* <label htmlFor={id} className='border border-slate-200 py-3 px-5 flex items-center justify-between gap-2 rounded-lg has-[:checked]:border-slate-400 has-[:checked]:bg-slate-200 transition-all' role='button'>
                <label htmlFor={id} className='block'>{option}</label>
                <input type="radio" name={name} value={value} className='appearance-none relative w-4 h-4 border border-slate-300 rounded-full checked:after:w-[9px] checked:after:h-[9px] checked:after:bg-slate-500 checked:after:absolute checked:after:rounded-full checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:border-slate-500 transition-all' id={id} />
            </label> */}
            <div className={`border py-3 px-5 flex items-center justify-between gap-2 rounded-lg transition-all ${checked ? 'border-slate-400 bg-slate-200' : 'border-slate-200'}`} role='button'>
                {option}
                <span className={`relative w-4 h-4 border border-slate-300 rounded-full transition-all block ${checked && 'after:absolute after:rounded-full after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:left-1/2 border-slate-500 after:bg-slate-500 after:w-[9px] after:h-[9px]'}`}></span>
            </div>
        </>
    )
}

export default Choice
