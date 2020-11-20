import {ExampleComponent} from "./components/ExampleComponent";
import {ReviewEdit} from "./components/ReviewEdit/ReviewEdit";
import {StampCard} from "./components/StampCard/StampCard";
import React from "react";

function App() {
  return <>
    <ReviewEdit
        title="소융대 비빔면+삼겹살"
        thumbnailUrl="https://wink.kookmin.ac.kr/static/images/1.jpg"
    />
  </>
}

export default App;
