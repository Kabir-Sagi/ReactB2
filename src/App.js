import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A from './Components/ParentChild/A'
import Parent from './Components/ChildToParent/Parent'





function App() {
  return (
    <div className="App">
     {/* <A /> */}
     <Parent />
    
     
         
    </div> 
  );
}

export default App;
