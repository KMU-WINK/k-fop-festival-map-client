import styled from 'styled-components';
import sam from '../../images/samgyeopsal.png'

function Booth_list(props){
    return(
        <div id="body">
            <List>
                <BoothCategory>{props.title}</BoothCategory>
                <Image>
                    {props.booths.map((booth) => <Booth thumbnailUrl={booth.thumbnailUrl}>
                        <Name>{booth.title}</Name>
                        <Place>{booth.bothCode}</Place>
                    </Booth>)}
                </Image>
            </List>
        </div>
    )
}

const List = styled.div`
    position: relative;
    background: white;
    border: 1px solid #dddddd;
    width: 100%;
    height : 100vh;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    overflow: hidden;
`

const BoothCategory = styled.span`
    font-size: 24px;
    position: absolute;
    top: 34px;
    left: 20px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`

const Image = styled.div`
    width: 397px;
    position: absolute;
    display: flex;
    top: 82px;
`
const Booth = styled.div`
    display: inline;
    background-image: url(${(props) => props.thumbnailUrl});
    background-size: cover;
    width: 119px;
    height: 119px;
    margin-left: 20px;
    position: relative;
    box-sizing: border-box;
`

const Name = styled.span`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #ffffff;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`

const Place = styled.span`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 4px;
`
export default Booth_list