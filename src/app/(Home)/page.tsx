'use client'
import Image from "next/image";
import { Emilys_Candy } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
const emilysCandy = Emilys_Candy({
    subsets: ['latin'],
    weight: ['400'],
});

const itemVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.6
        },
    },
}

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-[100vw] h-[100vh] bg-gradient-to-br from-pink-500 to-red-900 overflow-hidden relative">
            <motion.img
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src=" https://images.vexels.com/media/users/3/197415/isolated/preview/0682b55211a2f04f900e2969a665e676-man-lifting-woman-couple-silhouette.png" alt=""
                className="w-2/5 h-3/4 absolute bottom-0 -left-20 invert brightness-0 opacity-90 object-contain
                           shadow-[10px_10px_20px_rgba(87, 87, 87, 0.4)]" />
            <motion.img
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src="https://blissfulmates.com/wp-content/uploads/2023/09/Many-hearts-in-the-air-37308_1920.png" alt="hearts"
                className='absolute width-2/3 h-2/3 object-contain -right-10 -bottom-10 opacity-50' />

            <div className="absolute left-1/4 top-1/4 w-1/3">
                <div className={`${emilysCandy.className}`}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className="text-5xl">Happy
                    </motion.h1>

                    <div className="flex items-center justify-center gap-3">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            className="text-6xl">Valentines Day
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            className=''
                        >
                            <motion.img
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.1, 1.2, 1] }}
                                transition={{ duration: 1.3, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                                src="https://img.icons8.com/arcade/64/like.png" alt="heartIcon" />
                        </motion.div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className='py-4 text-lg'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam?
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className='pb-4 text-lg'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam?
                    </motion.p>

                </div>
                <motion.button
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    whileTap={{ scale: 0.9, }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1, ease: "easeOut", bounceDamping: 10, bounceStiffness: 600 }}
                    className="my-2 p-3 rounded-l-full rounded-r-full text-xl
                    tracking-wide bg-gradient-to-r from-red-400 to-red-300"
                >
                    <Link href="/midwayPopup">
                        Click here for surprise
                    </Link>
                </motion.button>
            </div>
        </motion.div>
    );
}
