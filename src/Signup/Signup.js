import React, {useState} from 'react';
import './Signup.css'

function Signup () {
    return (
                
        <div>
        <h4 className="titleName2">시작하기</h4>
        
        <div className="page2">
        
        <div className="contentWrap">
        
        <label className="inputTitle"> 
        이름</label>
        <input className="idinput" />

        <p></p>

        <label className="inputTitle"> 
        이메일</label>
        <input className="idinput2" />
        
        <p></p>
        
        <label className="inputTitle">
        비밀번호</label>
        <input className="idinput3"/>

        <p></p>

        <label className="inputTitle"> 
        비밀번호 확인</label>
        <input className="idinput4" />


        </div>
    </div> 
        
        <div>
        <button className="bottomButton2">
        회원가입
        </button>
        </div>
        
        <h3 className="QuestionText2">
        이미 회원이신가요? <a href="로그인">로그인</a>
        </h3>
        
    </div>
) }
        

export default Signup;