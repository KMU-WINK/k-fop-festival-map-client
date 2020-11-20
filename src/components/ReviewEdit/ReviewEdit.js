import React, { useState } from 'react';
import axios, {post} from 'axios';
import styled from 'styled-components';
import Header from "../Header/Header";
import WriteReviewButton from "../Button/Button";
import ReviewStar from "../ReviewStar/ReviewStar";
import background from '../../images/review_background.png';
import addImage from '../../images/add_img.png';
import reviewImage from '../../images/upload_img.png';
import deleteImage from '../../images/upload_delete.png';

export function ReviewEdit(props){
    const [ images, setImages ] = useState({
        file: '',
        previewURL: ''
    });
    const handleFileOnChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setImages({
                ...images,
                file : file,
                previewURL : reader.result
            })
        }
        reader.readAsDataURL(file);
    };
    // let profile_preview = null;
    // if(inputs.file !== ''){
    //     profile_preview = <img className="profile_preview" src={inputs.previewURL}/>
    // }

    return (
        <Wrap>
            <Header name={"리뷰 남기기"}></Header>
            <Title>
                <Text>{props.name}</Text>
            </Title>
            <Review>
                <p className={"quest"}>이 부스 어때요? 🤔</p>
                <ReviewStar></ReviewStar>
                <br/>
                <textarea
                    type="text"
                    name="content"
                    placeholder={"솔직한 리뷰를 작성해주세요!"} />
            </Review>
            <div className="upload_img">
                <button className={"img_btn"}></button>
                <div className={"review_img"}>
                    <button className={"delete_btn"}></button>
                </div>
                <div className={"review_img"}>
                    <button className={"delete_btn"}></button>
                </div>
            </div>
            <div className={"btn"}>
                <WriteReviewButton name={"리뷰 작성"}/>
            </div>
            {/*확인을 위해 출력*/}
            {/*<div>{JSON.stringify(inputs)}</div>*/}
        </Wrap>
    );
}

ReviewEdit.defaultProps = {
    name: '소융대 비빔면+삼겹살'
};

const Text = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: transparent;
    font-size: 24px;
    font-family: 'Noto Sans KR', sans-serif;
`;
const Title = styled.div`
    width: 100%;
    height: 219px;
    border: transparent;
    background: url(${background});
`;
const Review = styled.div`
    width: 100%;
    text-align: center;    
`;
const Wrap = styled.div`
    .quest {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 24px;
    }
    textarea { 
        border: 1px solid #eee;
        font-size: 14px;
        width: 100%; 
        height: 142px; 
        margin-top: 10px;
        padding: 10px;
        background-color: #eee;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .upload_img{
        width: 100%;
        height: 102px;
        margin: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img_btn {
        width: 102px;
        height: 102px;
        background: url(${addImage});
        border: transparent;
    }
    .review_img {
        width: 102px;
        height: 102px;
        margin-left: 20px;
        background: url(${reviewImage});
        border: transparent;
    }
    .delete_btn {
        width: 12px;
        height: 12px;
        float: right;
        margin: 10px;
        background: url(${deleteImage});
        border: transparent;
    }
    .btn {
        height: 43px;
    }
`;
