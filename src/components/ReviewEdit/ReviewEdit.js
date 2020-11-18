import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from "../Header/Header";
import WriteReviewButton from "../Button/Button";
import ReviewStar from "../ReviewStar/ReviewStar";
import background from '../../images/review_background.png';
import addImage from '../../images/add_img.png';
import reviewImage from '../../images/upload_img.png';
import deleteImage from '../../images/upload_delete.png';

export function ReviewEdit(){
    const [ inputs, setInputs ] = useState({
        title: '',
        content: '',
    });
    const { title, content } = inputs;

    const [ images, setImages ] = useState({
        file: '',
        previewURL: ''
    });

    const postBoard = async () => {
        const { title, content } = inputs;
        const post = await axios.post('', {
            title, content,
        });
        // alert('전송');
        setInputs({
            ...inputs,
            title: '',
            content: '',
        });
        console.log(post);
    };
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        // this.setState({
        //     [name]: value,
        // });
    };
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
    // const handleChangeFile = (e) => {
    //     let reader = new FileReader();
    //
    //     reader.onloadend = () => {
    //         const image = reader.result;
    //         if(image) {
    //             setImages(image.toString());
    //         }
    //     }
    //     if (e.target.files[0]) {
    //         reader.readAsDataURL(e.target.files[0]);
    //         setImages(e.target.files[0]);
    //     }
    // }


    let profile_preview = null;
    if(inputs.file !== ''){
        profile_preview = <img className="profile_preview" src={inputs.previewURL}/>
    }

    return (
        <Wrap>
            <Header name={"리뷰 남기기"}></Header>
            <div className={"title"}>
                <div className={"title_menu"}>소융대 비빔면+삼겹살</div>
            </div>
            <div className={"review"}>
                <p className={"quest"}>이 부스 어때요? 🤔</p>
                <ReviewStar></ReviewStar>
                <br/>
                <textarea
                    type="text"
                    name="content"
                    onChange={handleChange}
                    value={content}
                    placeholder={"솔직한 리뷰를 작성해주세요!"}
                />
            </div>
            <div className="upload_img">
                <button className={"img_btn"}></button>
                <div className={"review_img"}>
                    <button className={"delete_btn"}></button>
                </div>
                <div className={"review_img"}>
                    <button className={"delete_btn"}></button>
                </div>
                {/*<input type="file"*/}
                {/*       accept="image/jpg,impge/png,image/jpeg,image/gif"*/}
                {/*       name="profile_img"*/}
                {/*       onChange={handleChangeFile}*/}
                {/*       multiple*/}
                {/*       className={"upload_btn"}>*/}
                {/*</input>*/}
                {/*{profile_preview}*/}
            </div>
            <WriteReviewButton name={"리뷰 작성"}/>
        </Wrap>
    );
}


const Wrap = styled.div` 
    .title {
        width: 100%;
        height: 219px;
        border: transparent;
        background: url(${background});
    }
    .title_menu {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: transparent;
        font-size: 24px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .review {
        width: 100%;
        text-align: center;        
    }
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
`;
