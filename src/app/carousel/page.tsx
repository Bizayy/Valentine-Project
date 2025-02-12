'use client'
import React from 'react';
import "./carouselCss.css";
import { motion } from 'framer-motion';
import 'swiper/css/pagination';
import imageList from './utils/imageList';
import SwiperComponent from './components/swiper/swiperComponent';


const Carousel: React.FC = () => {
    return (
        <div className="banner">
            <div
                className="slider"
                // Using a CSS custom property (--quantity) for the total count of items.
                style={{ '--quantity': imageList.length } as React.CSSProperties}
            >
                {imageList.map((imgName, index) => (
                    <div
                        key={index}
                        className="item"
                        // Setting the CSS variable --position for each image (1-indexed)
                        style={{ '--position': index + 1 } as React.CSSProperties}
                    >
                        <img src={imgName} alt={`Dragon ${index + 1}`} />
                    </div>
                ))}
            </div>
            <motion.h1
                animate={{ scale: [1, 1.1, 1], }}
                transition={{ duration: 4, ease: "easeIn", repeat: Infinity }}
                className='absolute top-[10%] sm:inset-auto sm:bottom-[10%] lg:bottom-[40%] text-slate-300 text-2xl sm:text-5xl lg:text-6xl
                        font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,1)] '>

                Our Memories together
            </motion.h1>

            <SwiperComponent />
        </div>
    );
};

export default Carousel;


