import React, { useState } from 'react'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({})
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: user.email,
            password: user.password
        };

        fetch(`${import.meta.env.VITE_BACKEND_API_URI}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            setData(data);
            localStorage.setItem('token', data.token);
            navigate('/');
        })
        .catch((error) => {
            setData(error)
            console.error('Error', error);
        })
        
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    return (
        <section className='login min-h-dvh flex items-center py-5'>
            <div className="cont w-full">
                <div className="max-w-xl mx-auto w-full py-6 px-6 border border-gray-200 rounded-2xl flex-shrink-0">
                    <h1 className='mb-2 font-bold text-2xl text-purple-700'>Login</h1>
                    <p className='mb-6 text-gray-500 text-sm'>Don't have an account? <Link to='/signup' className='text-purple-700 font-medium'>Signup</Link></p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="email" className='block text-sm mb-2 font-medium'>Email</label>
                            <input type="email" id='email' name='email' className='block border border-slate-200 focus:outline-none w-full px-3 py-2 rounded-md placeholder:text-sm' placeholder='Enter email address' onChange={handleChange} value={user.email} required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className='block text-sm mb-2 font-medium'>Password</label>
                            <input type="password" id='password' name='password' className='block border border-slate-200 focus:outline-none w-full px-3 py-2 rounded-md placeholder:text-sm' placeholder='Enter password' onChange={handleChange} value={user.password} required />
                        </div>
                        {data.msg}
                        <Button type="submit">Login</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
