import React, { useState } from 'react';
import styled from 'styled-components';
import sw from './images/stamp-sw.png';
import art from './images/stamp-art.png';

function StampCard(){
    return (
        <Wrap>
            <div className={"stamp"}>
                <img className={"img"} src={sw}/>
                <div className={"content"}>
                    <p id={"date"}>20/11/04</p>
                    <p id={"time"}>15:20</p>
                    <p id={"price"}>￦ 5,000</p>
                    <p id={"list"}>쫄면 & 삼겹</p>
                </div>
                <div className={"button"}>
                    <button className={"btn"}>리뷰 작성</button>
                </div>
            </div>
            <div className={"stamp"}>
                <img className={"img"} src={art}/>
                <div className={"content"}>
                    <p id={"date"}>20/11/04</p>
                    <p id={"time"}>15:52</p>
                    <p id={"price"}>￦ 3,000</p>
                    <p id={"list"}>연애운</p>
                </div>
                <div className={"button"}>
                    <button className={"btn"}>리뷰작성</button>
                </div>
            </div>
        </Wrap>
    );
}


const Wrap = styled.div`
    .stamp {
        width: 310px;
        background-color: #eee;
        margin: 20px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .img {
        width: 100px;
        height: 100px;
        margin: 20px 0px 10px 40px;
    }
    .content {
        margin-top: 15px;
        margin-right: 50px;
        float: right;     
        text-align: center;   
    }
    p {
        margin: 2px 0px 0px 0px;
    }
    .button {
        width: 100%;
        text-align: center;
    }
    .btn {
        width: 80%;
        margin-bottom: 10px;
        font-size: 12pt;
        color: white;
        border-color: transparent;
        border-radius: 50px;
        background: linear-gradient(to right, #3494e6, #ec6ead);        
    }
`;

export default StampCard;
