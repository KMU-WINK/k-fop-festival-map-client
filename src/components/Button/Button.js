import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width : 150px;
    border-radius : 5px;
    border : 0;
    outline : 0;
    color : white;
    background : linear-gradient(to right, #82C3FF, #C464FF);
`;

function BasicButton(props) {
    return <Button>{props.name}</Button>
}

export default BasicButton;
