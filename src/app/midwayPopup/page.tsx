'use client'
import React from 'react'
import { motion } from "framer-motion";
import PopupBox from './components/popupBox';
import { useRef } from 'react';
import { Emilys_Candy } from 'next/font/google';

const emilysCandy = Emilys_Candy({
    subsets: ['latin'],
    weight: ['400'],
})

const Page = () => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className='w-[100vw] h-[100vh] bg-red-500 flex justify-center relative brightness-75'>

            {/* The div below contains the king queen cards as background*/}

            <div className='bg-hero sm:w-full md:w-4/5 h-full bg-center bg-no-repeat bg-cover'>

                {/* Blur popup box to get the input code */}

                <PopupBox ref={ref} />

            </div>
        </motion.div>
    )
}

export default Page;
