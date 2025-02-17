import './Hero.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json'
import React from 'react'

const Hero = () => {

  return (
    <section className=" h-wrapper">
        <div className="h-container">
            <img className="quote" src="./pattern-quotes.svg" alt="" />
       <Swiper>
        <SliderButtons/>
       {
        data.map((card, i)=>(
          <SwiperSlide key={i}>
          <div className="h-card">
            <div className='h-left flexColStart '>
                <span className='primary'>{card.detail.trim()}</span>
                <span className='secondary'>
                <span className='secondary1'>{card.name}</span>  
                   <span className='secondary2'>{card.work}</span>
                </span>
            </div>
            <div className="h-right">
                <img src={card.image} alt="home" />
            </div>
            </div>
          </SwiperSlide>  
        ))
            
        }
      </Swiper>
      
        </div>
        <img src="./pattern-bg.svg " alt=""  className='bg'/>
        <img src="./pattern-curve.svg" alt=""  className='curve'/>
       
        
    </section>
  )
}

export default Hero




const SliderButtons =()=>{
    const swiper= useSwiper()
    return(
        <div className="h-buttons flexCenter">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
