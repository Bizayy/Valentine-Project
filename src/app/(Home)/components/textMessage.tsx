import React from 'react'
import { motion } from 'framer-motion'

const TextMessage = () => {
    return (
        <div className="w-full sm:w-[300px] lg:w-full">
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className='py-4 lg:text-lg xl:text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam?
            </motion.p>
            <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className='pb-4 lg:text-lg xl:text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam?
            </motion.p>
        </div>
    )
}

export default TextMessage
