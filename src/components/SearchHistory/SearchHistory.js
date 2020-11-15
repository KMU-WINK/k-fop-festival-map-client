import styled from 'styled-components'
import React from "react";
import { IoIosClose } from "react-icons/io";

// props는 어떻게 줘야될 지 몰라서 틀만 먼저 잡아놨습니다.

function SearchHistory(){
    return(
        <>
            <SearchList>
                <TxtSearchHistory>검색 기록</TxtSearchHistory>
                <TxtDeleteAll>  전체삭제</TxtDeleteAll>
            </SearchList>
            <MySearchList>
                <MySearchData>마라탕</MySearchData>
                <DeleteBtn size = "24"></DeleteBtn>
            </MySearchList>
            <MySearchList>
                <MySearchData>마라탱</MySearchData>
                <DeleteBtn size = "24"></DeleteBtn>
            </MySearchList>
        </>
    )
}

const SearchList = styled.div`
    width: 375px;
    height: 49px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    display : flex;
    align-items : center;
    justify-content : space-between
`

const FontStyle = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color : #757575;
`

const TxtSearchHistory = styled(FontStyle)`
    margin-left : 21px;
    font-size : 18px
`
const TxtDeleteAll = styled(FontStyle)`
    margin-right : 21px;
    font-size: 13px;
`

const MySearchList = styled(SearchList)`
    height : 44px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`

const MySearchData = styled(FontStyle)`
    margin-left : 31px;
    font-size : 15px;
`

const DeleteBtn = styled(IoIosClose)`
    color : #757575;
    margin-right : 15px
    
`


export default SearchHistory