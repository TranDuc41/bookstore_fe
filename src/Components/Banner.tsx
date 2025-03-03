import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BannerImgs = [
    {
        url: './20240228_mYlgPFlk.png',
        alt: 'image',
        id: 1,
        link: ''
    },
    {
        url: './20250107_HRZhQmSo.jfif',
        alt: 'image',
        id: 2,
        link: ''
    },
    {
        url: './20250219_511HpS5t.jfif',
        alt: 'image',
        id: 3,
        link: ''
    }
]

const Banner = () => {
    return (
        <div className="grid grid-cols-3 gap-6 my-12">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="rounded-2xl col-span-2"
            >
                {BannerImgs.map((bannerImg) => (
                    <SwiperSlide key={bannerImg.id}>
                        <Link to={bannerImg.link}>
                            <img src={bannerImg.url} alt={bannerImg.alt} className="h-full object-cover" />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="grid grid-rows-2 justify-between gap-6">
                <div className="h-full w-full">
                    <img src="./20240717_vdHNhklV.jfif" alt="muasamkhongtienmat" className="rounded-2xl object-cover" />
                </div>
                <div className="h-full w-full">
                    <img src="./20241024_oC6dYh45.png" alt="muasamkhongtienmat" className="rounded-2xl object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Banner