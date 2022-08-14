import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonial = () => {
    const clients = [
    {    
        img: profilePic1,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas sapiente corporis iure odio accusamus ea labore itaque repellendus quod corrupti, laudantium aliquid reprehenderit exercitationem cupiditate maiores dignissimos eaque repudiandae vitae distinctio amet necessitatibus nisi ex consectetur. Inventore, doloremque. Ducimus, quo sunt natus autem similique perferendis quidem modi ad? Minus."
    },
    {
        img: profilePic2,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas sapiente corporis iure odio accusamus ea labore itaque repellendus quod corrupti, laudantium aliquid reprehenderit exercitationem cupiditate maiores dignissimos eaque repudiandae vitae distinctio amet necessitatibus nisi ex consectetur. Inventore, doloremque. Ducimus, quo sunt natus autem similique perferendis quidem modi ad? Minus."
    },
    {    
        img: profilePic3,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas sapiente corporis iure odio accusamus ea labore itaque repellendus quod corrupti, laudantium aliquid reprehenderit exercitationem cupiditate maiores dignissimos eaque repudiandae vitae distinctio amet necessitatibus nisi ex consectetur. Inventore, doloremque. Ducimus, quo sunt natus autem similique perferendis quidem modi ad? Minus."
    },
    {    
        img: profilePic4,
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas sapiente corporis iure odio accusamus ea labore itaque repellendus quod corrupti, laudantium aliquid reprehenderit exercitationem cupiditate maiores dignissimos eaque repudiandae vitae distinctio amet necessitatibus nisi ex consectetur. Inventore, doloremque. Ducimus, quo sunt natus autem similique perferendis quidem modi ad? Minus."
    }
    ]
    return (
    <div className="t-wrapper" id='testimonials'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
    {/* {Slider} */}
    <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{clickable: true}}
    >
        {clients.map((client, index) => {
            return(
                <SwiperSlide key={index}>
                    <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
    </div>
    )
}

export default Testimonial