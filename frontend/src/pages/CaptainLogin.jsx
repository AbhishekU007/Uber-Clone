import React, { useState } from 'react'
 import { Link } from 'react-router-dom'
 
 const CaptainLogin = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [captainData, setCaptainData] = useState({})
 
 
 
   const submitHandler = (e) => {
     e.preventDefault();
     setCaptainData({
       email: email,
       password: password
     })
     setEmail('')
     setPassword('')
   }
 
   return (
     <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
         <img className='w-16 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
 
         <form onSubmit={(e) => {
           submitHandler(e)
         }}>
           <h3 className='text-base font-medium mb-2'>What's your email</h3>
           <input
             required
             value={email}
             onChange={(e) => {
               setEmail(e.target.value)
             }}
             className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-base placeholder:text-sm'
             type="email"
             placeholder='email@example.com'
           />
 
           <h3 className='text-base font-medium mb-2'>Enter Password</h3>
 
           <input
             className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-base placeholder:text-sm'
             value={password}
             onChange={(e) => {
               setPassword(e.target.value)
             }}
             required type="password"
             placeholder='password'
           />
 
           <button
             className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-base placeholder:text-sm'
           >Login</button>
 
         </form>
         <p className='text-center'>New here? <Link to='/captain-signup' className='text-blue-600'>Join as a Captain!</Link></p>
       </div>
       <div>
         <Link
         to='/login'
           className='bg-[#111] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-base placeholder:text-sm'
         >Sign in as User</Link>
       </div>
     </div>
   )
 }
 
 export default CaptainLogin;