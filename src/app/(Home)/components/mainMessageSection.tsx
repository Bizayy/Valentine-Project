import React from 'react'
import { motion } from 'framer-motion'
import TextMessage from './textMessage';
import { Playfair_Display } from 'next/font/google';
import ButtonComponent from './buttonComponent';

// import { Emilys_Candy } from 'next/font/google';
// const emilysCandy = Emilys_Candy({
//     subsets: ['latin'],
//     weight: ['400'],
// });

const pf_display = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const MainMessageSection = () => {
    return (
        <div className="absolute sm:left-1/4 sm:top-[30%] md:top-1/4 sm:w-1/3 top-[10%] w-full text-center sm:text-left">
            <div className={`${pf_display.className}`}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Happy
                </motion.h1>

                <div className="flex justify-center sm:justify-start md:items-center gap-2 lg:gap-3">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Valentines Day
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className='xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-10 md:h-10 sm:w-8 sm:h-8 h-6 w-6'
                    >
                        <motion.img
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1.2, 1] }}
                            transition={{ duration: 1.3, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                            src="https://img.icons8.com/arcade/64/like.png" alt="heartIcon"
                            className="" />
                    </motion.div>
                </div>

                <TextMessage />
            </div>
            {/* Surprise Button */}
            <ButtonComponent />
        </div>
    )
}

export default MainMessageSection
