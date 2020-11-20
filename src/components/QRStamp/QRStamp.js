import Header from "../Header/Header";
import styled from "styled-components";
import sw from "../../images/stamp-sw.png";
import art from "../../images/stamp-art.png";
import blank from "../../images/stamp-blank.png";
import camera from "../../images/add_img.png";
function QRStamp()
{
    return <Wrap>
        <Header name={"스탬프 모아보기"} image={camera}></Header>
        <Container>
            <WrapIcon>
                <img className={"img"} src={sw}/>
            </WrapIcon>
            <WrapIcon>
                <img className={"img"} src={art}/>
            </WrapIcon>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
        </Container>

        <Container>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
        </Container>

        <Container>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
        </Container>

        <Container>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
            <WrapIcon>
                <img className={"img"} src={blank}/>
            </WrapIcon>
        </Container>
    </Wrap>
}

const Wrap = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto;
`;

const Container = styled.div`
    display:flex;
    justify-content:center;
`

const WrapIcon = styled.div`
    margin:10px;
    text-align : center;
    .img
    {
        width:90px;
        height:90px;
    }
`

export default QRStamp