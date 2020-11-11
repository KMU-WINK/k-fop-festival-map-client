import React from 'react'

import './review_card.css'
import star from './star.png'
import bibim from './bibim.png'

function Review_card(){
    return(
        <div className="card">
            <h3>익명의 크포프1</h3>
            <div className="star_box">
                <img src={star} alt="#"/>
                <img src={star} alt="#"/>
                <img src={star} alt="#"/>
                <img src={star} alt="#"/>
                <img src={star} alt="#"/>
            </div>
            <p className="script">
                이 집 다신 안간다. 한 번 더 가면 계속 먹을 것 같으니까
            </p>

            <div className="photo">
                <img src={bibim} alt="#"/>
                <img src={bibim} alt="#"/>
                <img src={bibim} alt="#"/>
            </div>
        </div>
    )
}

export default Review_card