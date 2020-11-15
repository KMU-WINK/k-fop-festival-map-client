import home from '../../images/home.svg'
import map from '../../images/map.svg'
import setting from '../../images/setting.svg'

import styled from 'styled-components'

function BottomTapBar(){
    return(
        <BottomTap>
            <WrapIcon>
                <img src={home} alt=""/>
            </WrapIcon>
            <Line/>
            <WrapIcon>
                <img src={map} alt=""/>
            </WrapIcon>
            <Line/>
            <WrapIcon>
                <img src={setting} alt=""/>
            </WrapIcon>
        </BottomTap>
    )
}

const BottomTap = styled.div`
    height : 56px;
    display : flex;
    bottom : 0;
    display : flex;
    align-items : center;
`

const WrapIcon = styled.div`
    flex : 1;
    text-align : center;
`

const Line = styled.div`
    width : 28px;
    height : 0px;
    border: 1px solid #777777;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(90deg);  
`

export default BottomTapBar