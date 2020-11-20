import Header from "../Header/Header";
import Booth_list from "../BoothList/BoothList";
import BottomTapBar from "../BottomTapBar/BottomTapBar";
import ReviewCard from "../ReviewCard/ReviewCard";
import {getWeather, getPopularBooth} from "../../lib/server";
import React from "react";

function Home(){
    const [popBooths, setPopBooths] = React.useState([]);
    React.useEffect(() => {
        async function exec(){
            // 인기 부스 가져오기
            const popBooth = await getPopularBooth();
            setPopBooths(popBooth);

        }

        exec();
    }, []);

    return(<>
            <Header/>
            <Booth_list
                title="인기부스"
                booths={popBooths}
            />
            <BottomTapBar/>
        </>
    )
}

export  default Home