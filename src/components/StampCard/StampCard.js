import React, { useState } from 'react';
import styled from 'styled-components';
import sw from '../../images/stamp-sw.png';
import art from '../../images/stamp-art.png';
import Header from "../Header/Header";
import WriteReviewButton from "../Button/Button";

export function StampCard(props){
    return (
        <Wrap>
            <Header name={"스탬프 모아보기"}></Header>
            <Stamp>
                <img className={"img"} src={sw}/>
                <Content>
                    <p id={"date"}>{props.date}</p>
                    <p id={"time"}>{props.time}</p>
                    <p id={"price"}>￦ 5,000</p>
                    <p id={"list"}>쫄면 & 삼겹</p>
                </Content>
                <Button>
                    <WriteReviewButton name={"리뷰 작성"}/>
                </Button>
            </Stamp>
            <Stamp>
                <img className={"img"} src={art}/>
                <Content>
                    <p id={"date"}>20/11/04</p>
                    <p id={"time"}>15:52</p>
                    <p id={"price"}>￦ 3,000</p>
                    <p id={"list"}>연애운</p>
                </Content>
                <Button>
                    <WriteReviewButton name={"리뷰 작성"}/>
                </Button>
            </Stamp>
        </Wrap>
    );
}

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