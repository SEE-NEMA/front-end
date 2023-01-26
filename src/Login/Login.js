import React, {useState} from 'react';
import './Login.css'

function Login () {
    return (
       
<div className="page">
   

    <div className="titleWrap">
    SEEnema에 다시 오신걸 환영해요!
    </div>

    <div className="contentWrap">
        <div className="inputTitle"> 
        이메일 주소</div>
            <div className="inputWrap">
                <input className="input" 
                placeholder = "test@gmail.com" />
    </div>

    <div className="errorMessageWrap">
    </div>

    <div style={{marginTop : "26px" }} className="inputTitle">
        비밀번호</div>
        <div className="inputWrap">
            <input className="input"
            placeholder = "영문, 숫자, 특수문자 포함 8자 이상"/>
    </div>

    <div className="errorMessageWrap"> 
    </div>
    
  </div>

    <div>
        <button className="bottomButton">
            로그인
        </button>
    </div>
</div> 
) }

export default Login;