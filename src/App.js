import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

// in this file we build our main "App" component.
// inside it we will render a Headline and a InputComp component.
// to allow for that we need to inport them from other files.
//this is done in the next two lines:
import Headline from './Headline.js';
import InputComp from './InputComp.js';


//now we start building the App component. To start, we make a copy/an instance
//of React's Component "blueprint" which brings a lot of functionality.
//On that, we then extend to make it our own.
class App extends Component {
  //This component has its own state (data). We initialize it
  //in this constructor function. The only data we want for
  //now is an array holding words. See it 4 lines below :)
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    }
  }

  //Functions go here

// const superagent = require('superagent');

  getGifs = (term) => {
    console.log("naje API call righ here with the term" + term);

    let endpoint = 'https://api.giphy.com/v1/stickers/search?api_key=kptMFHHG9u3s8riFacExpmmJqWubeDAt&q='+ term +'&limit=25&offset=0&rating=G&lang=en'

    request.get(endpoint).then(res => {
      console.log(res.body);
      this.setState({
        gifs: res.body.data
      });
          // res.body, res.headers, res.status
       })


    // let newWords = this.state.words.concat(newWord);
    //
    // // overwrite the current words in our state
    // // with the updated one
    // this.setState({
    //   words: newWords
    // })

  }

  render() {
    return (
      <div className="App">

        <Headline greeting={"WeChat Sticker Picker"}></Headline>

        <InputComp submit={this.getGifs}></InputComp>
        <div className = "display">
          {this.state.gifs.map( gif => <div className="box"><p><img width="200px" height="200px" src={gif.images.downsized.url} alt="gifs"></img></p></div> )}
        </div>


      </div>
    );
  }
}

export default App;
