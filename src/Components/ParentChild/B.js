import React from 'react'


class B extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"B Component"
        }
    }
    render() {
        return <div>
            <h2>B Component</h2>
             <h4>Name:{this.props.na}</h4>
             <h4>City:{this.props.ci}</h4>
        </div>
    }
}

export default B