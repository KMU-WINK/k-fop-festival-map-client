import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import QR from '../../images/QR.png';
import event from '../../images/event.png';
import next from '../../images/next.png';

const Setting = styled.div`
    width : 300px;
`;

const Wrap = styled.div`
    width : 80%;
    margin : 30px;
`;

const SettingButton = styled.button`
    width : 100%;
    height : 30px;
    background : transparent;
    margin-left : 10px;
    margin : 5px;
    border-bottom : gray;
    border : none;
    font-size : 20px;
    font-weight : bold;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`;

function eventPage(){

}

function SettingPage(){
    return(
        <Setting>
            <Wrap>
                <SettingButton onClick = {eventPage}>
                    <div><img src = {event}/> Event</div>
                    <img src = {next}/>
                </SettingButton>

                <SettingButton>
                    <div><img src = {QR}/> QR SCANNER</div>
                    <img src = {next}/>
                </SettingButton>
            </Wrap>

            <Wrap>
                <SettingButton>
                    ABOUT 크포프<img src = {next}/>
                </SettingButton>

                <SettingButton>
                    PUSH 알림<img src = {next}/>
                </SettingButton>

                <SettingButton>
                    부스 문의 사항<img src = {next}/>
                </SettingButton>
            </Wrap>
        </Setting>

    )
}

export default SettingPage;
