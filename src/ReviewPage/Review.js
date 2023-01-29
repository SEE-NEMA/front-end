import './Review.css';

function Review() {
    return(
        <div>
        <div className ='WrapReview'>
        
        <div className = 'WrapContent'>
        <label className = 'ReviewLabel'>
        공연장 </label>
        <input className = 'ReviewInput'></input>
        </div>

        <p></p>

        <div className = 'WrapContent'>
        <label className = 'ReviewLabel'>
        공연</label>
        <input className = 'ReviewInput2'></input>
        </div>

        <p></p>
        
        <div className = 'WrapContent'>
        <label className = 'ReviewLabel'>
        좌석</label>
        <input className = 'ReviewInput3'></input>
        </div>

        <p> </p>

        <div className = 'WrapImage'>
        <label className = 'ImageLabel'>
        사진</label>
        <button className = 'AddImage'>첨부하기</button>
        </div>

        <p> </p>

        <div className = 'WrapReviewBox'>
        <label className = 'ReviewLabel'>
        후기</label>
        <input className = 'ReviewInputBox'></input>
        </div>

       
        
    </div>
        <button className = 'ReviewUpload'>업로드</button>
        </div>
    )
}


export default Review;


