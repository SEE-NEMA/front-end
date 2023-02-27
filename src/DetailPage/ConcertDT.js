import './ConcertDT.css'
import React from 'react'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ConcertDT() {
    return(
        <div className = "WrapDT">
            <Container className = "WrapConcert">
      <Row className = "ConcertRow">
        <Col className = "ConcertImage" xs={4} ></Col>
        <Col className = "ConcertInfo">
          <p className = "Category">뮤지컬</p>
          <p className = "InfoName">뮤지컬 이름</p>
          <p className = "InfoSub"> 장소 </p>
          <p className = "InfoSub"> 공연장 총평 </p>
          <p className = "InfoSub"> 기간 </p>
          <p className = "InfoSub"> 러닝타임 </p>
          </Col>
      </Row>
      </Container>
      <p className = "Keyword">키워드 총평</p>

            
        </div>

    )
}

export default ConcertDT;