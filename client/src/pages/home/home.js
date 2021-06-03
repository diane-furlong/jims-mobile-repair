import React from 'react'
import './home.css'

const home = () => {
    return (
        <div className="mainDiv">
            <h1 className="title">Jim's Mobile Repair</h1>
            <h3 className="title">Stay put- I'll come to you!</h3>
            <br/>
            <h3 className="intro">Hi, I'm Jim Summers.</h3>
            <h4 className="intro">I can fix just about anything.</h4>
            <br/>
            <br/>
            <div className="homeLists">
                <h5 className="specialize">
                    I specialize in:
                    <ul>
                        <li>Engine Repair</li>
                        <li>Welding</li>
                    </ul>
                </h5>
                <h5 className="fixExamples">
                    I can fix your:
                    <ul>
                        <li>Car</li>
                        <li>Watercraft</li>
                        <li>Lawnmower</li>
                        <li>Snowblower</li>
                        <li>Snow Plow</li>
                        <li>And a variety of other engines. <br/> To ask about a specific item, <a href="/contact">contact me</a>!</li>
                    </ul>
                </h5>
            </div>
            <br/>
            <h5 className="repairContact">
            What can I repair for you?
            </h5>
            <button className="repairContactBtn" href="/contact">
                Contact Me
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default home
