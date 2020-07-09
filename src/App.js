import React, {Component} from 'react';
import './App.css';
import Validation from "./ValidationComponent/ValidationComponent";
import Char from "./Char/Char";

class App extends Component{
  state ={
    userInput : "hello"
  }
  inputChangeHandler = (event) => {
    this.setState({
      userInput : event.target.value,
    });

  }
  deleteCharHandler = (index) => {
     const text = this.state.userInput.split("");
     text.splice(index, 1);
     const updatedText = text.join("");
     this.setState({userInput: updatedText});

  }


  render(){

    const charList = this.state.userInput.split("").map((char, index) =>{
      return (
        <Char 
        character = {char} 
        key = {index} 
        clicked = {() => this.deleteCharHandler(index) }
        />
      );
    } );

    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={this.inputChangeHandler} />
        <p> {this.state.userInput} </p>
        <Validation length= {this.state.userInput.length} />
        {charList}
      </div>
    )
  }
} 

export default App;
