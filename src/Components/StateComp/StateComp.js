import React,{Component} from 'react'

class StateComp extends Component  {
  constructor() {
      super() // it calls the parent class(Component class) Constructor
      this.state = {
          name:"Sagar",
          bio:"I am React Developer,I can develop application with React and Bootstrap"
      }
  }
   upDateState = ()=>{
      this.setState({
        
         bio:"I am Angular Developer" 
      })
   }

    render() {
        return <div>
            <h2>State Concept</h2>
             <h4 className="mt-5">Name:{this.state.name}</h4>
             <p>{this.state.bio}</p>
             <button className="btn btn-primary" onClick={this.upDateState}>Update State</button>
        </div> 
    }

}

export default StateComp