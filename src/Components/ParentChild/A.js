import React from 'react'
import B from './B'

class A extends React.Component {
  constructor() {
      super()
      this.state = {
          name:"Sagar Sagi",
          city:"Delhi"
      }
  }
   render() {
       return <div style={{textAlign:"center",color:"blue",marginTop:"100px"}}>
           <h2>A Component</h2>
          <B na={this.state.name} ci={this.state.city} />
       </div>
   }

}

export default A