/*시야 후기 모아보기 화면 */

import React from "react";
import {Link} from 'react-router-dom';
import Header from "../../Header";
import '../styles/Review.css';
import {FaSearch} from "react-icons/fa";

function Review()
{
    return(
        <div>
            <Header/>
            <div className="WrapReview">
            <input placeholder="공연 혹은 공연장 이름을 검색해주세요"></input>
                <button className="Search">
                    <FaSearch size="30"/>
                </button>
            <Link to="/perform_review">
                <button className="Write">글쓰기</button>
            </Link>
            <hr className="Reviewhr"/>
            </div>
        </div>
    );
}

export default Review;