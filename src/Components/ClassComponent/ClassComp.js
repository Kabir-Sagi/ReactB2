import React from 'react'  
import './ClassComp.css'

class ClassComp extends React.Component  {
    constructor() {
        super() 

    }

    render() {
        return <div className="myclass">
            <h2>My first Class Component</h2>
            <p>I have create my class Component</p>
        </div>
    }



} 

export default ClassComp