import styled from 'styled-components'

import SearchHistory from "../SearchHistory/SearchHistory";
import SearchHeader from "../SearchHeader/SearchHeader";

function Search(){
    return(
        <>
            <SearchHeader/>
            <HashTagContainer>
                <HashTag>#밥보다는 간식</HashTag>
            </HashTagContainer>

            <SearchHistory/>
        </>
    )
}

const HashTagContainer = styled.div`
    width : 100%;
    
`

const HashTag = styled.div`
    margin : 12px 12px;
    border: 1px solid #E9E9E9;
    width : fit-content;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    display : flex;
    align-items : center;
    font-size: 13px;
    padding : 10px;
`

export default Search