import {ExampleComponent} from "./components/ExampleComponent";
import {ReviewEdit} from "./components/ReviewEdit/ReviewEdit";
import {StampCard} from "./components/StampCard/StampCard";
import Header from "./components/Header/Header";
import React from "react";

function App() {
  return <>
    <Header name="스탬프 모아보기"/>
    <StampCard
      date="20/11/04"
      time="15:20"
      price="￦ 5,000"
      list="쫄면 & 삼겹"
    />
    <StampCard
        date="20/11/04"
        time="15:52"
        price="￦ 3,000"
        list="연애운"
    />
  </>
}

export default App;
