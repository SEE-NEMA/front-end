import './Concert.css'
import React, {useState} from 'react';

function Concert () {
    return(
        <div className='WrapConcert'>
            <div className = 'WrapConcertTT'>
                <labal className = 'TitleLabel'>
                제목</labal>
                <input className = 'CTtitle' placeholder=' [ 공연장 이름 + 공연 ] 으로 작성해주세요.'></input>
            </div>

            <p></p>

            <div className='WrapConcertCT'>
                <label className = 'ContentLabel'>
                내용</label>
                <input className = 'CTcontent' placeholder  = '내용을 입력해주세요.'></input>
           
            </div>
            <p></p>


        </div>
    )
}

export default Concert;