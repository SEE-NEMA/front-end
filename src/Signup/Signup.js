import React, {useState} from 'react';
import './Signup.css'

function Signup () {
    return (
       
<div className="page">
   

    <div className="titleWrap">
    시작하기
    </div>

    <div className="contentWrap">

    <div className="inputTitle"> 
        이름</div>
        <div className="inputWrap">
            <input className="input" 
            placeholder = "이름을 입력해주세요" />
    </div>

    <div className="inputTitle"> 
        이메일</div>
        <div className="inputWrap">
            <input className="input" 
            placeholder = "test@gmail.com" />
    </div>

    <div className="inputTitle"> 
        비밀번호</div>
        <div className="inputWrap">
            <input className="input" 
            placeholder = "영문, 숫자, 특수문자 포함 8자 이상" />
    </div>

    <div className="errorMessageWrap">
    </div>

    <div style={{marginTop : "26px" }} className="inputTitle">
        비밀번호 확인</div>
        <div className="inputWrap">
            <input className="input"/>
    </div>

    <div className="errorMessageWrap"> 
    </div>
    
  </div>

    <div>
        <button className="bottomButton">

        </button>
    </div>
</div> 
) }


export default Signup;