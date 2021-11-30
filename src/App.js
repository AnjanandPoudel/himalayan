import React,{Component} from 'react'
import './App.css';
import MainComponent from './components/main.jsx';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  
  render(){
    return (
      
     <div className="" >
        <BrowserRouter>
          <div className="App">
            <MainComponent />
          </div>
        </BrowserRouter>
     </div>
    );
  }
  
}

export default App;
