import React, { Component } from 'react';
import logo from './images/headphones.png';
import './App.css';


const title = 'Welcome to Mood Room';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
      <h1 className="title">
      {title}
      </h1>
      <img src={logo} className='logo' alt="logo" />
      <Instructions />
      <Options />
      </div>
    );
  }
}

class Options extends Component {
  render(){
    const options = ['Melancholic', 'Excited', 'Eager'];
    return (
      <select name="mood-options" id='mood-options'>
      {
        options.map(function (item) {
            return <option name={item} key={item}>{item}</option>
        })
      }
      </select>)};
    }
    
    class Instructions extends Component {
      
      render() {
        const instructions = [
          'What MoodRoom would you like to tune into today?',
          'Select from the options below'
        ];
        
        return (
          <div className="instructions">
            {
              instructions.map(function (item) {
                return <p key={item}>{item}</p>
              })
            }
          </div>
        );
      }
    }
    
  
    export default App;
    