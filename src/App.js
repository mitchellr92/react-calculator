import React, { Component } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { ClearButton } from './Components/ClearButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

//ES6 format allows you to skip manually binding function to the state and gives it a cleaner look 
  addToInput = value => {
    this.setState({ input: this.state.input + value });
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
          <ClearButton handleClear={() => this.setState({input: ''})}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
