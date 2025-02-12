import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import imageList from '../../utils/imageList';
import './swiperCss.css';

export default function SwiperComponent() {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {imageList.map((url, index) => (
                <SwiperSlide key={index}>
                    <img src={url} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
