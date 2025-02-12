import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const ButtonComponent = () => {
    return (
        /* Surprise Button */
        <motion.button
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            whileTap={{ scale: 0.9, }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, ease: "easeOut", bounceDamping: 10, bounceStiffness: 600 }}
            className="p-2 lg:p-3 rounded-l-full rounded-r-full lg:text-lg xl:text-xl tracking-wide bg-gradient-to-r
                    from-red-400 to-red-300 sm:text-sm"
        >
            <Link href="/midwayPopup">
                Click here for surprise
            </Link>
        </motion.button>
    )
}

export default ButtonComponent
