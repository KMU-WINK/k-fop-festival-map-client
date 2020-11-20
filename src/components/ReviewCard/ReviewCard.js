import star from '../../images/star.png'
import bibim from '../../images/bibimmyeon.png'
import React from "react";
import styled from "styled-components"

function ReviewCard(props){
    return(
        <>
            {props.reviews.map((review) =>
                <Review>
                    <Author> {review.author}</Author>
                    <Star>
                        <StarImg src={star} alt="#"/>
                        <StarImg src={star} alt="#"/>
                        <StarImg src={star} alt="#"/>
                        <StarImg src={star} alt="#"/>
                        <StarImg src={star} alt="#"/>
                    </Star>
                    <Script>
                        {review.script}
                    </Script>
                    <Photo>
                        <PhotoImg src={review.url} alt="#"/>
                        <PhotoImg src={review.url} alt="#"/>
                        <PhotoImg src={review.url} alt="#"/>
                    </Photo>
                </Review>
            )}
        </>

    )
}

const Review = styled.div`
    position: relative;
    background: white;
    width: calc(100% - 40px);
    height: 245px;
    border: 1px solid #dddddd;
    margin: 20px;
`

const Author = styled.span`
    position: absolute;
    font-size: 16px;
    top: 20px;
    left: 20px;
    margin: 0;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`

const Star = styled.div`
    position: absolute;
    top: 22px;
    left: 208px;
    margin-left: 0;

`

const StarImg = styled.img`
    margin-left: 6px;
    width: 15px;
    height: 15px;
`

const Script = styled.p`
    width: 287px;
    position: absolute;
    left: 20px;
    top: 49px;
    margin: 0 auto;
    font-size: 14px;
    color: #777777;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
`

const Photo = styled.div`
    overflow: hidden;
    position: relative;
    top: 106px;
    display: flex;
    height: 119px;
    margin-bottom: 18px;
`

const PhotoImg = styled.img`
    margin-left: 20px;
    width: 119px;
    height: 119px;
`
export default ReviewCard