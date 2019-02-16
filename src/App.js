import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.quote = this.quote.bind(this);
    this.randomize=this.randomize.bind(this);
    this.randomColor=this.randomColor.bind(this);
  }
    quote(){
      fetch(' http://quotes.stormconsultancy.co.uk/random.json')
      .then(function(response){return response.json()})
      .then(function(data){
      document.getElementById("text").textContent=data.quote
      document.getElementById("author").textContent=data.author;})
      .catch(function(){console.log("somthing wrong")})
      this.randomize();
    }
    randomColor() {
      var letters = '123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    randomize() {
      document.getElementById("quote-box").style.background = this.randomColor();
      
    };
    componentDidMount(){
      this.quote();
    }
  
  render() {
    
    return (
      <div id="quote-box">
          <h3 id="text"></h3>
          <p id="author"></p>
          <button id="new-quote" onClick={this.quote}>New Quote</button>
          <button><a target="blank" href="twitter.com/intent/tweet" id="tweet-quote">Tweet</a></button>
      </div>
    );
  }
}
export default App;
