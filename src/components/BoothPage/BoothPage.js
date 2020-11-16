import Header from "../Header/Header";
import BoothLike from "../BoothLike/BoothLike";
import BoothBtn from "../BoothBtn/BoothBtn";
import BoothDescription from "../BoothDescription/BoothDescription";
import ReviewCard from "../ReviewCard/ReviewCard";
import Button from "../Button/Button";
import BottomTapBar from "../BottomTapBar/BottomTapBar";

function BoothPage(){
    return(
        <>
            <Header/>
            <BoothLike/>
            <BoothBtn/>
            <BoothDescription/>
            <ReviewCard/>
            <Button name = "리뷰작성"/>
            <BottomTapBar/>
        </>
    )
}

export default BoothPage
