import styled from "styled-components";

function HashTag(props){
    console.log(props)
    return(
        <>
            <HashTagContainer>
            {props.tag.map((hashTag) =>
                    <Tag>{hashTag.tagName}</Tag>
            )}
            </HashTagContainer>
        </>
    )
}

const HashTagContainer = styled.div`
    display : flex;
    width : 100%;
    
`

const Tag = styled.div`
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

export default HashTag