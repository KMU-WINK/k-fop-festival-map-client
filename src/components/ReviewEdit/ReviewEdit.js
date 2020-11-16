import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import food from '../../images/food.jpg';

export function ReviewEdit(){
    const [ inputs, setInputs ] = useState({
        title: '',
        content: '',
        file: '',
        previewURL: ''
    })
    const { title, content, file, previewURL } = inputs;

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
            setInputs({
                ...inputs,
                file : file,
                previewURL : reader.result
            })
        }
        reader.readAsDataURL(file);
    };

    let profile_preview = null;
    if(inputs.file !== ''){
        profile_preview = <img className="profile_preview" src={inputs.previewURL}/>
    }

    return (
        <Wrap>
            <h2>리뷰 남기기</h2>
            <div>
                <img src={food} alt={"sw_food"}/>
                {/*<text className={"menu"}>소융대 비빔면+삼겹살</text>*/}
                <p>
                    <input
                        className="menu"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={title}
                    />
                </p>
            </div>
            <p>
                {/*<text className={"quest"}>이 부스 어땠어요?</text>*/}
                <p className={"quest"}>이 부스 어땠어요?</p>
                <textarea
                    type="text"
                    name="content"
                    onChange={handleChange}
                    value={content}
                    placeholder={"솔직한 리뷰를 작성해주세요!"}
                />
            </p>
            <div className="App">
                <input type="file"
                       accept="image/jpg,impge/png,image/jpeg,image/gif"
                       name="profile_img"
                       onChange={handleFileOnChange}
                       className={"upload_btn"}>
                </input>
                {profile_preview}
            </div>
            <Button>
                <button onClick={postBoard}>리뷰 작성</button>
            </Button>
            {/*확인을 위해 출력*/}
            <div>{JSON.stringify(inputs)}</div>
        </Wrap>
    );
}


const Wrap = styled.div` 
    h2 {
        text-align: center;
        font-family: 'Noto Sans KR', sans-serif;
    }
    img {
        width: 100%;
        vertical-align: middle;
    }
    .menu { 
        text-align: center;
        position: absolute;
        top: 33%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        background-color: transparent;
        font-size: 30px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    p {
        width: 100%;
        text-align: center;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .quest {
        font-size: 20px;
    }
    textarea { 
        border: 1px solid #eee;
        font-size: 14px;
        width: 95%; 
        height: 100px; 
        padding: 10px;
        background-color: #eee;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .upload_btn {
        margin-left: 10px;
    }
    .profile_preview {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }
`;
const Button = styled.div` 
    border-top: 1px solid #eee;
    padding: 20px; 
    button { 
        float: right; 
        padding: 10px 20px; 
        border-radius: 5px; 
        text-decoration: none; 
        background: #212121; 
        color: #fff; 
        font-size: 16px; 
        font-family: 'Noto Sans KR', sans-serif;
    } 
    a { 
        float: right; 
        padding: 10px 20px; 
        border-radius: 5px; 
        text-decoration: none; 
        background: #f2f2f2; 
        border: 1px solid #ddd; 
        color: #424242; 
        font-size: 16px; 
    } 
    & > button + a { 
        margin-right: 10px; 
    } 
`;
