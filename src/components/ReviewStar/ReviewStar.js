import React from 'react';
import styled from 'styled-components';
import star_empty from '../../images/emptystar.png'
import star_full from '../../images/fullstar.png'

const Star = styled.span`
    border : none;
    background : transparent;
`;

function ChangeStar(num){
    const Arr = ['star1','star2','star3','star4','star5']
    for (let i=0;i<5;i++) document.querySelector('#' + Arr[i]).src = star_empty;
    for (let i=0;i<num;i++) document.querySelector('#' + Arr[i]).src = star_full;
}

function ReviewStar(){
    return (
        <Star>
            <img id = "star1" src = {star_empty} onClick = {ChangeStar.bind(this,1)}/>
            <img id = "star2" src = {star_empty} onClick = {ChangeStar.bind(this,2)}/>
            <img id = "star3" src = {star_empty} onClick = {ChangeStar.bind(this,3)}/>
            <img id = "star4" src = {star_empty} onClick = {ChangeStar.bind(this,4)}/>
            <img id = "star5" src = {star_empty} onClick = {ChangeStar.bind(this,5)}/>
        </Star>
    );
}

export default ReviewStar;