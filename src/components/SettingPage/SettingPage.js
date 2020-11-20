import React from 'react';
import styled from 'styled-components';

import MainHeader from '../Header/Header';
import BottomTapBar from "../BottomTapBar/BottomTapBar";

import QR from '../../images/QR.png';
import event from '../../images/event.png';
import next from '../../images/next.png';

const Setting = styled.div`
    width : 100%;
`;

const Wrap = styled.div`
    width : 100%;
    margin : 30px;
`;

const SettingButton = styled.button`
    width : 90%;
    height : 30px;
    background : transparent;
    border : none;
    font-size : 20px;
    font-weight : bold;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`;


function SettingPage(){
    return(
        <Setting>
            <MainHeader name = {"MY PAGE"}/>

            <Wrap>
                <SettingButton>
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
                    <div>ABOUT 크포프</div>
                    <img src = {next}/>
                </SettingButton>

                <SettingButton>
                    <div>PUSH 알림</div>
                    <img src = {next}/>
                </SettingButton>

                <SettingButton>
                    <div>부스 문의 사항</div>
                    <img src = {next}/>
                </SettingButton>
            </Wrap>
            <BottomTapBar/>
        </Setting>
    )
}

export default SettingPage;
