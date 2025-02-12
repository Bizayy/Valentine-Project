import React from 'react'
import { forwardRef } from 'react';
import { motion } from 'framer-motion'
import { Emilys_Candy } from 'next/font/google';
import handleSubmit from '../utils/handleSubmitLogic';
import { useRouter } from 'next/navigation';
const emilysCandy = Emilys_Candy({
    subsets: ['latin'],
    weight: ['400'],
})


const PopupBox = forwardRef<HTMLInputElement>((_, ref) => {
    const router = useRouter();

    return (
        /* Blur Popup Box */
        <div className='w-full h-full backdrop-blur-sm flex items-center justify-center' >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className='w-[90%] sm:w-2/3 lg:w-1/2 h-1/2 backdrop-blur-sm flex flex-col items-center justify-center gap-6 p-5 bg-stone-400 bg-opacity-60 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.6)]'>

                <motion.h1 className={`${emilysCandy.className} text-2xl lg:text-3xl xl:text-4xl text-center text-black inline`}>
                    Enter the secret code to get your surprise babygurl
                    <motion.img src='https://img.icons8.com/laces/64/like.png' className='inline transform rotate-12 w-10 h-10 mx-1' />
                </motion.h1>

                <form onSubmit={(e) => handleSubmit(e, ref, router)} className='flex flex-col items-center justify-center gap-6 w-full'>

                    <motion.input type="password" name='code' ref={ref} placeholder='Enter the secret code here'
                        className=' sm:w-[60%] lg:w-2/3 outline-none p-2 rounded-md text-black' />

                    <motion.button type='submit' className='w-1/4 text-white text-xl p-2 bg-gradient-to-br from-orange-600 to-pink-400 rounded-md'>
                        OK
                    </motion.button>

                </form>

            </motion.div>
        </div >
    )
});

PopupBox.displayName = "PopupBox"; // Fix for ESLint error

export default PopupBox;
