/*공연장 후기 작성화면*/
import Header from "../../Header";
import '../styles/ReviewWrite.css'
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




function ReviewWrite () {

   
    return(
        
       <div>
        <Header></Header>
       
            <div className='WrapConcert'>
            <div className = 'WrapConcertTT'>
                <label className = "TitleP">제목</label>
                <input className = 'CTtitle' placeholder=' [ 공연장 이름 + 공연 ] 으로 작성해주세요.'></input>
            </div>

            <p></p>

            <label className = 'Date'>관람일자</label>
           
            <DatePicker
            className = "MyDatePicker"
            dataFormat = "yyyy-MM-dd" />

            <p></p>

            <div className='WrapConcertCT'>
                <label className = 'ContentLabel'>
                내용</label>
                <textArea className = 'CTcontent' ></textArea>
            </div>

            <p></p>
        </div>

        <button className = "ReviewUpload">업로드</button>
        </div>
    )
}

export default ReviewWrite;