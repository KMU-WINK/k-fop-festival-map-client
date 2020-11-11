import React from 'react'
import './booth_list.css'
import sam from './sam.png'

function Booth_list(){
    return(
        <div id="box">
            <div id="tap_bar"></div>
            <p id="list_title">이 시간 가장 인기있는 부스!</p>
            <List/>
        </div>
    )
}


function List(){
    return(
        <div className="list">
            <div className="image">
                <span className="name">예술대학 분장</span>
                <span className="place">B-1</span>
            </div>
            <div className="image">

            </div>
            <div className="image">

            </div>
        </div>


    )
}
export default Booth_list