import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
        <Container>
        <Row>
            <Col>
            <div className="about-goal">
            <h1>Our Goal</h1>
            <p>Our sole goal is to make the world a more sustainable place. Currently, global warming and an pandemic has made it hard to purchase items you need day to day so why not create a platform where you can find whant you miht want to borrow or exchange what you need with what you have?
            </p>
            </div>
            </Col>
        </Row>
    
        <Row>
            <Col>
            <div className=" lead about-who-we-are">
            <h1>Who are We?</h1>
            <p>We are a small team of developers</p>
            <br/>
            <p>Yash Bavaskar - Co-founder & Developer
            <br/>
            Ashutosh Jadhav - Co-founder & Developer
            </p>
            </div>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default AboutUs