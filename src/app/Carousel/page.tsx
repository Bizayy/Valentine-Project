// Carousel.tsx
'use client'
import React from 'react';
import "./carouselCss.css";
import { motion } from 'framer-motion';

const imageList = [
    "https://images.pexels.com/photos/17719524/pexels-photo-17719524/free-photo-of-old-couples-love-image.jpeg",
    "https://images.pexels.com/photos/15844085/pexels-photo-15844085/free-photo-of-man-and-woman-walking-along-beach.jpeg",
    "https://images.pexels.com/photos/28038139/pexels-photo-28038139/free-photo-of-amigos-2.jpeg",
    "https://images.pexels.com/photos/29766631/pexels-photo-29766631/free-photo-of-romantic-couple-embracing-outdoors.jpeg",
    "https://images.pexels.com/photos/3080070/pexels-photo-3080070.jpeg",
    "https://images.pexels.com/photos/18036612/pexels-photo-18036612/free-photo-of-a-couple-standing-on-a-pier-looking-at-the-water.jpeg",
    "https://images.pexels.com/photos/3488807/pexels-photo-3488807.jpeg",
];

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
                className='text-slate-300 text-6xl font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,1)]'>Our Memories together</motion.h1>
        </div>
    );
};

export default Carousel;


