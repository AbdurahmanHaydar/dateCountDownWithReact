import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';
import { Form , FormControl , Button } from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      deadline: '9 September 2017',
      newDeadLine:''
    }
  }

  changeDeadline(){
    console.log(this.state);
    this.setState({
      deadline:this.state.newDeadLine
    });
  }

  render(){
    return (
      <div className="App">
        <div className="App-title">Count Down Timer To {this.state.deadline } </div>
          <form inline>

              <input onChange={event => this.setState({newDeadLine:event.target.value})}  placeholder='new date'  type="text"  name="textBox"/>
              <button onClick={()=>this.changeDeadline()}>submit</button>
           </form>

           <Clock deadline={this.state.deadline}/>

      </div>
    )
  }
}

export default App;
