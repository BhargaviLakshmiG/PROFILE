import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
           // 'myskills':['HTML','CSS','JS','NODE','REACT JS','MONGODB','SQL']
           'myskills':[{name:'HTML', range:'70'},
               {name:'CSS',range:'65'},
               {name:'JS',range:'70'},
               {name:'NODE',range:'75'},
               {name:'REACT',range:'55'},
               {name:'MONGO DB',range:'75'},
               {name:'SQL',range:'75'}
           ]

           
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value) => {
                return <li>{value.name} <pre>      <input type="range" min="1" max="100" value={value.range} class="slider" id="myRange"></input>  </pre></li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills