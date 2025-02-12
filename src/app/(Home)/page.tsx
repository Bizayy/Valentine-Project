'use client'
import { motion } from "framer-motion";
import MainMessageSection from "./components/mainMessageSection";

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
            <MainMessageSection />
        </motion.div>
    );
}
