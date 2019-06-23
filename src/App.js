import React, { Component } from 'react';
import Nav from './Nav';
import Image from './Image';
import About from './About'
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Page">
        <Nav/>
        <Image />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
