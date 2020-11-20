import React, { useState } from 'react';
import styled from 'styled-components';
import sw from '../../images/stamp-sw.png';
import art from '../../images/stamp-art.png';
import WriteReviewButton from "../Button/Button";

export function StampCard(props){
    return (
        <Wrap>
            <Stamp>
                <img className={"img"} src={sw}/>
                <Content>
                    <p>{props.date}</p>
                    <p>{props.time}</p>
                    <p>{props.price}</p>
                    <p>{props.list}</p>
                </Content>
                <Button>
                    <WriteReviewButton name={"리뷰 작성"}/>
                </Button>
            </Stamp>
        </Wrap>
    );
}
export default StampCard;

const Wrap = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto;
`;
const Stamp = styled.div`
    width: 310px;
    background-color: #eee;
    margin: 20px;
    display:inline-block;
    font-family: 'Noto Sans KR', sans-serif;
    .img {
        width: 100px;
        height: 100px;
        margin: 20px 0px 10px 40px;
    }
    p {
        font-weight: bold;
        margin: 5px 0px -3px 0px;
    }
`;
const Content = styled.div`
    margin-top: 15px;
    margin-right: 50px;
    float: right;     
    text-align: center; 
`;
const Button = styled.div`
    height: 19px;
    padding-bottom: 20px;
`;