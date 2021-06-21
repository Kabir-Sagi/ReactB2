import React, { Component } from 'react'
import PersonObject from '../../../src/Data/personInformation'

export default class Person extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
             info:PersonObject
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.info.name}</h2>
                <p>{this.state.info.address.flatno}</p>
            </div>
        )
    }
}
