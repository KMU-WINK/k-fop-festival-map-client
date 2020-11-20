import styled from "styled-components";
import QrReader from "react-qr-reader";
import React, {useState} from 'react'
import MainHeader from '../Header/Header';
import img from '../../images/image.png'

const Wrap = styled.div`
    width : 100%;
`;

const BottomMsg = styled.div`
    background : white;
    height : 55px;
    text-align : center;
    margin : auto;
    color : #1A465F;
    margin-top : 10px;
    font-size : 18px;
    font-weight : bold;
`;

export function QRcodePage(){
    const [state, setState] = useState("No result");

    const handleScan = data => {
        if (data) {
            setState(data);
        }
    }

    const handleError = err => {
        console.error(err);
    }

    return(
        <Wrap>
            <MainHeader name = {"코드 스캔"} content = {<img src = {img}/>}/>
            <div>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                />
                {/*스캔시 정보 출력*/}
                {/*<p>{JSON.stringify(state)}</p>*/}
            </div>
            <BottomMsg>QR코드를 스캔하거나 QR 이미지를 업로드해보세요</BottomMsg>
        </Wrap>

    )
}

export default QRcodePage;
