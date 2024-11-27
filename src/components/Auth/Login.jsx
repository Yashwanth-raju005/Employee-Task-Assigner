// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'


const Login = ({handleLogin}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    handleLogin(email,password)

    setEmail("")
    setPassword("")
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                required  className='rounded-full py-2 px-4  border-emerald-500 text-xl border-2 outline-none bg-transparent placeholder:text-gray-400' type='email' placeholder='Enter Your Email'
                 />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className='rounded-full py-2 px-4  border-emerald-500 text-xl border-2 mt-3 outline-none bg-transparent placeholder:text-gray-400' type='password' placeholder='Enter Your Password' 
                />
                <button className='text-white outline-none border-none text-xl px-24 py-1 mt-4 bg-emerald-500 placeholder:text-gray-400 rounded-full'>Login</button>
            </form>
 
        </div>
        
    </div>
  )
}

export default Login