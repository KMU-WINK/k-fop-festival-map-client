import React from 'react';
import styled from 'styled-components';
import rightArrow from '../../images/right-arrow.svg'

const Header = styled.div`
    height : 55px;
    text-align : center;
    color : #1A465F;
    font-size : 25px;
    font-weight : bold;
    display : flex;
    flex-direction : row;
    align-items : center;
`;

const Text = styled.div`
    flex : 1;
`;

const DivIcon = styled.div`
    width : 24px;
    height : 24px;
    display : flex;
    flex-direction : row;
    align-items : center;
    margin-left : 24px;
    margin-right : 24px;
    img{
        width : 24px;
        height : 24px;
    }
`;

function MainHeader(props) {
    return (
        <Header>
            <DivIcon><img src = {rightArrow}/></DivIcon>
            <Text>{props.name}</Text>
            <DivIcon><img src = {props.image}/></DivIcon>
        </Header>
    )
}

export default MainHeader;