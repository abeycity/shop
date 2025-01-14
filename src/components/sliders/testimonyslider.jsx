import { SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Swiper from "swiper"
import { testimonials } from "../../utils/_variable";
import { IoMdCheckmark } from "react-icons/io";
import ReactStars from 'react-rating-stars-component'   

const Testimonyslider = () => {
  return (
    <div>
         <Swiper
      
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            { testimonials.map(({name,desc,stars},i)=>
              <SwiperSlide key={i}>
                 <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  isHalf={true}
                  value={stars}
                 />
                 <article>
                  <h3>{name}</h3>
                   <div><IoMdCheckmark /></div>
                 </article>
                 <p>{desc}</p>
              </SwiperSlide>
            )}
            ...
      </Swiper>
    </div>
  )
}

export default Testimonyslider