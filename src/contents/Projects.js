import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import hangman from '../img/hangman.png';


class Projects extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Projects</h1>
            <Widecard title="Blue Cross Blue Shield Tennessee" where="IBM India Pvt. Ltd" from="Nov 2006" to="Dec 2008"/>
            <Widecard title="Partner Commerce Servers" where="IBM India Pvt. Ltd" from="Jan 2009" to="Dec 2011"/>
            
            </div>
            )
        }
    }
    
export default Projects