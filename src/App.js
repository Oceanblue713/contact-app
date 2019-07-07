import React, { Component } from 'react';
import Nav from './Nav';
import Message from './Message';
import Image from './Image';
import About from './About'
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Page">
        <Nav/>
        <Message />
        <Image />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
