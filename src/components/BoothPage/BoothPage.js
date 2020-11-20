import Header from "../Header/Header";
import BoothLike from "../BoothLike/BoothLike";
import BoothBtn from "../BoothBtn/BoothBtn";
import BoothDescription from "../BoothDescription/BoothDescription";
import ReviewCard from "../ReviewCard/ReviewCard";
import Button from "../Button/Button";
import BottomTapBar from "../BottomTapBar/BottomTapBar";
import React,{useState,useEffect} from "react"

function BoothPage(){

    const [likeNum,setLikeNum] = useState()
    const [review, setReview] = useState([])


    React.useEffect(() =>{
        async function exec(){
            // 일단 아무숫자나 지정
            await setLikeNum(1032)
            await setReview([
                {
                    author : "익명의 크포프1",
                    script : "이 집 다신 안가",
                    url : "https://images.unsplash.com/photo-1605701061257-37892a5cc0ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60"
                },
                {
                    author : "익명의 크포프2",
                    script : "이 집 다신 가",
                    url : "https://images.unsplash.com/photo-1605701061257-37892a5cc0ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60"
                },
                {
                    author : "익명의 크포프3",
                    script : "이 집 다신 안가",
                    url : "https://images.unsplash.com/photo-1605701061257-37892a5cc0ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60"
                },
            ])

        }
        exec()
        // console.log(description.way)
    },[])

    return(
        <>
            <Header/>
            <BoothLike
                like = {likeNum}
            />
            <BoothBtn/>
            <BoothDescription
                category = "간식"
                way = "10~15분"
                time = "10:00 ~ 20:00"
                detail = "이 조합 미침"

            />
            <ReviewCard
                reviews = {review}
            />
            <Button name = "리뷰작성"/>
            <BottomTapBar/>
        </>
    )
}

export default BoothPage
