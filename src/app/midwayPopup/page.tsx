'use client'
import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { Emilys_Candy } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const emilysCandy = Emilys_Candy({
    subsets: ['latin'],
    weight: ['400'],
})


const MidwayPopup = () => {

    const ref = useRef<HTMLInputElement>(null);
    const router = useRouter();

    {/* Basic validation to make sure that the visitor navigates to carousel upon entering correct code and sees alert message upon
    entering wrong code. The code is 1234 */}

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const code = formData.get("code");
        if (Number(code) == 1234) {
            router.push(`/Carousel`);
        }
        else {
            alert("Please enter the valid code");
            if (ref.current) {
                ref.current.value = ''
                ref.current.focus();
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className='w-[100vw] h-[100vh] bg-red-500 flex justify-center relative brightness-75'>

            {/* The div immediately below contains the king queen cards as background*/}

            <div className='bg-hero sm:w-full md:w-4/5 h-full bg-center bg-no-repeat bg-cover'>

                {/* Blur popup box to get the input code */}
                <div className='w-full h-full backdrop-blur-sm flex items-center justify-center'>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        className='w-[90%] sm:w-2/3 lg:w-1/2 h-1/2 backdrop-blur-sm flex flex-col items-center justify-center gap-6 p-5 bg-stone-400 bg-opacity-60 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.6)]'>

                        <motion.h1 className={`${emilysCandy.className} text-2xl lg:text-3xl xl:text-4xl text-center text-black inline`}>
                            Enter the secret code to get your surprise babygurl
                            <motion.img src='https://img.icons8.com/laces/64/like.png' className='inline transform rotate-12 w-10 h-10 mx-1' />
                        </motion.h1>

                        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-6 w-full'>

                            <motion.input type="password" name='code' ref={ref} placeholder='Enter the secret code here'
                                className=' sm:w-[60%] lg:w-2/3 outline-none p-2 rounded-md text-black' />

                            <motion.button type='submit' className='w-1/4 text-white text-xl p-2 bg-gradient-to-br from-orange-600 to-pink-400 rounded-md'>
                                OK
                            </motion.button>

                        </form>

                    </motion.div>
                </div>
            </div>
            <motion.img>

            </motion.img>
        </motion.div>
    )
}

export default MidwayPopup
