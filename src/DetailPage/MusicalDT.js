import './MusicalDT.css'
import React from 'react'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MusicalDT() {
    return(
        <div className = "WrapMusicalDT">
            <Container className = "WrapMusicalCT">
              <Row className = "MusicalRow">
                <Col className = "MusicalImage" xs={4} ></Col>
                  <Col className = "MusicalInfo">
                    <p className = "MusicalCategory">뮤지컬</p>
                    <p className = "MusicalInfoName">뮤지컬 이름</p>
                    <p className = "MusicalInfoSub"> 장소 </p>
                    <p className = "MusicalInfoSub"> 공연장 총평 </p>
                    <p className = "MusicalInfoSub"> 기간 </p>
                    <p className = "MusicalInfoSub"> 러닝타임 </p> </Col>

              </Row>
           </Container>
      <p className = "MusicalKeyword">키워드 총평</p>  
        </div>

    )
}

export default MusicalDT;