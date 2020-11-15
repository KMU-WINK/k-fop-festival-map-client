import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../images/search.png'

const Wrap = styled.div`
    width : 100%;
    border-style : solid; 
`;

const SearchHeader = styled.input.attrs({
    type : 'text'
})`
    width : 200px;
    height : 30px;
    border : 0;
    outline : 0;
`;

const SearchButton = styled.span` 
    border : none;
    background : transparent;
    float : right;
    margin-right : 8px;
`;

function Search() {
    return (
        <Wrap>
            <SearchHeader placeholder={"부스 이름, 주제 등으로 찾기"}/>
            <SearchButton>
                <img src = {searchIcon}/>
            </SearchButton>
        </Wrap>
    );
}

export default Search;
