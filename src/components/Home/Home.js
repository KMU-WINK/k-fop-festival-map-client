import Header from "../Header/Header";
import Booth_list from "../BoothList/BoothList";
import BottomTapBar from "../BottomTapBar/BottomTapBar";
import React from "react";

function Home(){
    return(<>
            <Header/>
            <Booth_list/>
            <BottomTapBar/>
        </>
    )
}

export  default Home