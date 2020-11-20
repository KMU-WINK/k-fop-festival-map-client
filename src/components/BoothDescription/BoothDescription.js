import styled from "styled-components";
import React from "react"

function BoothDescription(props){
    console.log(props)
    // console.log(props.des[0])
    return(
        <>
            <Description>
                <LeftDescription>분류</LeftDescription>
                <RightDescription>{props.category}</RightDescription>
            </Description>
            <Description>
                <LeftDescription>웨이</LeftDescription>
                <RightDescription>{props.way}</RightDescription>
            </Description>
            <Description>
                <LeftDescription>운영시간</LeftDescription>
                <RightDescription>{props.time}</RightDescription>
            </Description>
            <Description>
                <LeftDescription>상세설명</LeftDescription>
                <RightDescription>{props.detail}</RightDescription>
            </Description>
        </>
    )
}

const FontStyle = styled.div`
    font-size : 14px;
`

const Description = styled.div`
    display : flex;
    margin-bottom : 10px;
    width : calc(100% - 48px);
`

const LeftDescription = styled(FontStyle)`
    color : #333333;
    text-align: right;
    width : 70px;
    
`

const RightDescription = styled(FontStyle)`
    color : #777777;
    text-align : left;
    margin-left : 16px;
`

export default BoothDescription