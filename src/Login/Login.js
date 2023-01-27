import React, {useState} from 'react';
import './Login.css'

function Login () {
    return (
        
    <div>
    <h4 className="titleName">SEEnema에 다시 오신걸 환영해요!</h4>

    <div className="page">

    <div className="contentWrap">

        <label className="inputTitle"> 
        이메일</label>
        <input className="idinput" />

        <p></p>

        <label style={{marginTop : "26px" }} className="inputTitle">
        비밀번호</label>
        <input className="passwordinput"/>
   
        </div>
    </div> 

    <div>
        <button className="bottomButton">
            로그인
        </button>
    </div>

    <h3 className="QuestionText">
        아직 회원이 아니신가요?  <a href="회원가입">회원가입</a>
    </h3>

</div>
) }

export default Login;