import React, {useEffect, useRef, useState} from "react";
import { AiOutlineBars } from 'react-icons/ai';
import '../screens/styles/Sidebar.css'
import {Link} from 'react-router-dom';
import Review from '../screens/Review/Review.js';

const Sidebar = ({width=400, children}) => {
    const [isOpen, setOpen] = useState(false);
    const [xPosition, setX] = useState(width);
    const side = useRef();

    // button 클릭 시 토글
    const toggleMenu = () => {
        if(xPosition > 0) {
            setX(0);
            setOpen(true);
        }
        else {
            setX(width);
            setOpen(false)
        }
    };

    // 사이드바 외부 클릭 시, 닫히는 함수
    const handleClose = async e => {
        let sideArea = side.current;
        let sideChildren = side.current.contains(e.target);
        if (isOpen && (!sideArea || !sideChildren)) {
            await setX(width);
            await setOpen(false);
        }
    }

    useEffect(()=> {
        window.addEventListener('click', handleClose);
        return () => {
            window.removeEventListener('click', handleClose);
        };
    })

    return(
        <div className="container">
            <div ref={side} className="sidebar" style={{width: `${width}px`, height:'100%', transform: `translatex(${-xPosition}px)`}}>
                <AiOutlineBars onClick={()=> toggleMenu()} className="button_bar">
                {isOpen?
                <span>X</span> : <AiOutlineBars/>    
                }
                </AiOutlineBars>
                <div className="content">
                    <br/><br/><br/>
                    <ul>공연
                        <li><a href="/MusicalDT">뮤지컬</a></li>
                        <li><a href="/ConcertDt">콘서트</a></li>
                    </ul>
                    <br/><br/>
                    <ul>공연장
                        <li><a href="/seeya">시야 정보</a></li>
                        <li><a href="/facility">주변 시설</a></li>
                        <li><a href="/matzip">근처 맛집</a></li>
                    </ul>
                    <ul>
                        <li><a href="/Review">후기 모아보기</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;