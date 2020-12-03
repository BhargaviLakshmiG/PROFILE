import React, { Component } from 'react';
import profilepic from '../img/img.jpg';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <h2>BHARGAVI LAKSHMI GUNDREDDY</h2>
            <h4>Full Stack Developer</h4>
            </div>
            )
        }
    }
    
    export default Home