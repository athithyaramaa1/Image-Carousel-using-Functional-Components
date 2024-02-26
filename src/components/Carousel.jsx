import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


function Carousel() {
    let [index, setIndex] = useState(0)

    const backPic = () => {
        if(index === 0){
            setIndex(2)
        }else{
            setIndex((prev) => prev - 1)
        }
    }
    const ForwardPic = () => {
        if(index === 2){
            setIndex(0)
        }else{
            setIndex((prev) => prev + 1)
        }
    }

    return(
        <div className="Images-Conatainer">
            <ArrowBackIosIcon onClick={backPic} className="backArrow" />
            <img src={images[index].img} alt={`carousel-image-${index}`} />
            <ArrowForwardIosIcon onClick={ForwardPic} className="frontArrow"/>
        </div>
    )
}

export default Carousel;
