import React, { useState } from "react";
import { sliderData } from "./images";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './image.css'
const ImageSlider=(slides)=>{
    const [current, setCurrent]=useState(0)
    const length= slides.length

    const next=()=>{
        setCurrent(current===length-1? 0 :current+1)
    }
    const prev=()=>{
        setCurrent(current===0?length-1 : current-1)
    }
     if(!Array.isArray(slides)||slides.length<=0){
         return null
     }
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="leftArrow" onClick={prev} />
            <FaArrowAltCircleRight className="rightArrow" onClick={next} />
        {sliderData.map((slide, index)=>{
            return(
              <div className={index===current? 'slideactive': 'slide'}key={index}> 
                 {index===current &&(
                       <img src={slide.image} alt="pic" className="image"/>
                 )}
                
                  </div> 
            ) 
        })}
        </section>
    )
}
export default ImageSlider