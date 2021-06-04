import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './contact.css'

const Contact = () => {
    return (
        <div className="mainDiv" id="contactDiv">
            <Card className="contactMeTitle">
                <Card.Header as='h5' className="contactHeader">
                    Contact Me
                </Card.Header>
            </Card>
            <Card className="emailCard">
                <Card.Body>
                    <Card.Title>Email:</Card.Title>
                    <Card.Text>
                        summerse275@gmail.com
                    </Card.Text>
                    <Button variant="primary" href="mailto:summerse275@gmail.com">Click here to send an email</Button>
                </Card.Body>
            </Card>
            <Card className="callCard">
                <Card.Body>
                    <Card.Title>Phone:</Card.Title>
                    <Card.Text>
                        440-679-6999
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Contact
