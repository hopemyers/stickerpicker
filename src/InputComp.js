import React, { Component } from 'react';
import './App.css';

class InputComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentWord: "",
    }
  }

  updateWord = (event) => {
    this.setState({
      currentWord: event.target.value
    });
  }

  submitWord = () => {
    this.props.submit(this.state.currentWord);
  }

  render() {
    return (
      <div className="inputComp">
        <input placeholder="Search..." onChange={this.updateWord}></input>
        <button onClick={this.submitWord}>Get Stickers</button>
      </div>
    );
  }
}

export default InputComp;
