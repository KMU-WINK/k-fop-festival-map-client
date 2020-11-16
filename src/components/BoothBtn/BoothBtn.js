
import React from "react";
import styled from "styled-components"

function BoothBtn(){
    return (
        <>
            <EventBtn>이벤트 참여 바로가기</EventBtn>
        </>
    )
}

const EventBtn = styled.button`
    width : calc(100% - 48px);
    height : 54px;
    border : none;
    margin : 20px 24px;
    box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color : #777777;
    font-size: 14px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.28);
`

export default BoothBtn

