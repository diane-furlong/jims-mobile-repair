import React from 'react'
import './MyWork.css'
import {Container, Row, Col} from 'react-bootstrap'
import duneBuggy from '../../images/duneBuggy.jpg'
import duneBuggy2 from '../../images/duneBuggy2.jpg'
import duneBuggy3 from '../../images/duneBuggy3.jpg'
import trike from '../../images/jokerTrike.jpg'
import trike2 from '../../images/jokerTrike2.jpg'
import trike3 from '../../images/jokerTrike3.jpg'

const Mywork = () => {
    return (
        <Container className='mainDiv' id='myWorkDiv'>
            <h3>My Work:</h3>
            <Row>
                <h6>Dune Buggy, completely rebuilt 2016 to 2017</h6>
                <Col md>
                    <img src={duneBuggy} alt='Dune Buggy' className='buggyPhoto'/>
                </Col>
                <Col md>
                    <img src={duneBuggy2} alt='Dune Buggy' className='buggyPhoto'/>
                </Col>
                <Col md>
                    <img src={duneBuggy3} alt='Dune Buggy' className='buggyPhoto'/>
                </Col>
            </Row>
            <br/>
            <Row>
                <h6>Trike, completely rebuilt 2019 to 2020</h6>
                <Col md>
                    <img src={trike2} alt='Trike' className='buggyPhoto'/>
                </Col>
                <Col md>
                    <img src={trike} alt='Trike' className='buggyPhoto'/>
                </Col>
                <Col md>
                    <img src={trike3} alt='Trike' className='buggyPhoto'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Mywork
