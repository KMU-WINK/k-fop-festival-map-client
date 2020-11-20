import like from "../../images/like.svg";
import share from "../../images/share.svg";

import styled from "styled-components";
import React from "react";

function BoothLike(props){
    return(
        <Container>
            <img src={like} alt=""/>
            <Like>{props.like}명이 좋아합니다</Like>
            <img src={share} alt=""/>
        </Container>
    )
}

const Container = styled.div`
    width : calc(100% -48px);
    margin-left : 24px;
    margin-right : 24px;
    margin-top : 20px;
    display : flex;
    justify-content : space-between;
`

const Like = styled.span`
    position : absolute;
    left : 58px;
`

export default BoothLike