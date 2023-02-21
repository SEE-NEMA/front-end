/* 공연장 상세페이지 화면 */

import React from "react";
import {Link} from 'react-router-dom';
import Header from "../../Header";
import '../styles/ConcertDt.css';

function ConcertDt() {
    return (
        <div>
            <Header/>
            <div className="div">
            <input placeholder="공연 혹은 공연장 이름을 검색해주세요"></input>
                
            
            <hr/>
            </div>
        </div>
    )
}

export default ConcertDt;