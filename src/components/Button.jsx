import React from 'react'

const Button = ({className, children, ...rest}) => {
    return (
        <button className={`px-6 py-4 bg-prime text-white leading-none rounded-full ml-auto block min-w-28 hover:bg-gray-800 transition-all disabled:opacity-50, ${className}`} {...rest}>{children}</button>
    )
}

export default Button
