import React from 'react'

class Child extends React.Component {

    constructor() {
        super()
        this.state = {
            name:"Kabir",
            city:"Delhi"
        }
    }
      callParentfn = ()=>{
      this.props.getFn(this.state.name,this.state.city)
      }
    render() {
        return <div>
            <button className="btn btn-warning" onClick={this.callParentfn}>Pass Data</button>
        </div>
    }
}

export default Child