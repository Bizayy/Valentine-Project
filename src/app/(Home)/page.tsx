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
            className="w-screen h-screen bg-gradient-to-br from-pink-500 to-red-900 overflow-hidden relative">

            {/* Man Lifting woman up image on bottom left of the landing page*/}
            <motion.img
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src=" https://images.vexels.com/media/users/3/197415/isolated/preview/0682b55211a2f04f900e2969a665e676-man-lifting-woman-couple-silhouette.png" alt=""
                className="hidden sm:block bg-no-repeat w-2/5 h-3/4 absolute -bottom-[4%] sm:-bottom-[10%] lg:bottom-0 -left-12 lg:-left-[7%] invert brightness-0 opacity-90
                object-contain shadow-[10px_10px_20px_rgba(87, 87, 87, 0.4)]" />

            {/* Multiple Hearts image on bottom right of the landing page */}
            <motion.img
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src="https://blissfulmates.com/wp-content/uploads/2023/09/Many-hearts-in-the-air-37308_1920.png" alt="hearts"
                className='absolute sm:rotate-none w-full sm:w-1/2 xl:w-2/3 h-2/3 object-contain sm:-right-[5%] xl:-right-[12%] sm:-bottom-[15%] lg:-bottom-[5%] opacity-50
                           -bottom-[20%]' />

            {/* Main message Section*/}
            <div className="absolute sm:left-1/4 sm:top-[30%] md:top-1/4 sm:w-1/3 top-[10%] w-full text-center sm:text-left">
                <div className={`${emilysCandy.className}`}>
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

                </div>
                {/* Surprise Button */}
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
            </div>
        </motion.div>
    );
}
