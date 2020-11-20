import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width : 80%;
    // height : 43px;
    border-radius : 5px;
    border : 0;
    outline : 0;
    color : white;
    background : linear-gradient(to right, #82C3FF, #C464FF);
    margin : auto;
    display : block;
`;

function BasicButton(props) {
    return <Button>{props.name}</Button>
}

export default BasicButton;
