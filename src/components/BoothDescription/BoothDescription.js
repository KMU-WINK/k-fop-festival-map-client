import styled from "styled-components";
import React from "react"

function BoothDescription(){
    return(
        <>
            <Description>
                <LeftDescription>분류</LeftDescription>
                <RightDescription>간식 | 한식</RightDescription>
            </Description>
            <Description>
                <LeftDescription>웨이</LeftDescription>
                <RightDescription>10~15분</RightDescription>
            </Description>
            <Description>
                <LeftDescription>운영시간</LeftDescription>
                <RightDescription>10:00 ~ 20:00</RightDescription>
            </Description>
            <Description>
                <LeftDescription>상세설명</LeftDescription>
                <RightDescription>이 조합은 미쳤다. 주인장 나와. 이렇게 장사하면 망해!!</RightDescription>
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