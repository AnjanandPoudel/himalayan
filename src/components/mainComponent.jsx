import React,{Component} from 'react';
import Header from './headerComponent';
import Home from './homeComponent';
import Headertwo from './headerComponent2';
import {Redirect,Route, Switch} from 'react-router-dom';





class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
      }
/*       
    onCourseClick(itemId){
      this.setState({selectedCourseId:itemId})
  }
 */
  
      render() {
        console.log(this.props)
        const HomePage=()=>{
          return(
            <Home  courses={""}
              Loading_courses={false}
              errmsg={false} />
          )
        }
        const HeadertwoPage=()=>{
          return(
            <Headertwo/>
          )
        }
      
        return (
        
          <div className="">
                      
            <Switch>
              <Route path="/headerone">
                <Header  loginUser={""} logoutUser={""} auth={""} 
              userinformation={"anjan"} />
              </Route>

              
              <Route path="/headertwo" component={HeadertwoPage} />
              
              
              <Redirect to="/headerone" /> 
            </Switch>
            <Home />

          </div>
    
        );
      }
}

export default Main // connecting class Main and mapStatetoProps