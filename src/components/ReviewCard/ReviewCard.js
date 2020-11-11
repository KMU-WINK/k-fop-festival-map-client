import "./reviewCard.css"
import star from '../../images/star.png'
import bibim from '../../images/bibimmyeon.png'
import React from "react";


function ReviewCard(){
    return(
        <div id="review">
            <span>익명의 크포프1</span>
            <div id="star">
                <img src={star} alt="#"/>
                <img src={star} alt="#"/>
                <img src={star} alt="#"/>
                <img src={star} alt="#"/>
                <img src={star} alt="#"/>
            </div>

            <p id="script">
                이 집 다신 안 간다. 한 번 더 가면 계속 먹을 것 같으니까.
            </p>
            <div id="photo">
                <img src={bibim} alt="#"/>
                <img src={bibim} alt="#"/>
                <img src={bibim} alt="#"/>
            </div>
        </div>
    )
}

export default ReviewCard