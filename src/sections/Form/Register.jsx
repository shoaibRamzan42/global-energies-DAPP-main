import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";



const Register = () => {
  return (<>
    <Navbar/>
    
    <div className='bg-[#080513]  max-w-[100vw] overflow-x-hidden font-[Urbanist] pt-[130px] md:pt-[150px] overflow-y-scroll  h-screen mx-auto px-4 '>
      <h1 className='text-center font-extrabold  text-[32px] sm:text-[42px] md:text-[52px] text-green-600 mt-3 '>Welcome to the kYC  centre</h1>
      <motion.div
            initial={{ y: "50%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ y: 0, opacity: 1 }}
            className=""
          >
      <form className='gradient-border mb-5 w-auto   p-3 md:w-[28rem] mx-auto rounded-md mt-5'>
      <h1 className='text-[36px]  gradient-text font-extrabold text-center'>KYC Form</h1>
      <h1 className='text-white text-[20px] mt-4'>First Name</h1>
      <input required type="text" placeholder='First Name*' className=' m-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
      <h1 className='text-white text-[20px] mt-4'>Last Name</h1>
      <input required type="text" placeholder='Last Name*' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
      <h1 className='text-white text-[20px] mt-4'>Your Email</h1>
      <input required type="email" placeholder='abc@gmail.com' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
      <h1 className='text-white text-[20px] mt-4'>Your Identity No</h1>
      <input required type="number" placeholder='xxxxx-xxxxx-x' className=' ml-2 p-3 bg-[#4949497d] text-white  w-[95%] rounded-md' />
       <Link to="/app"> <button type='submit' className='btn-bg p-2 text-white text-center rounded-md active:shadow-lg active:shadow-green-800 hover:scale-105 duration-700 justify-center flex mt-4 w-[120px] mx-auto'>Submit</button></Link>
      </form>
      </motion.div>
    </div>
    </>
  )
}

export default Register
