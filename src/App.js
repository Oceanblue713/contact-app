import React, { Component } from 'react';
import Nav from './Nav';
import Message from './Message';
import Image from './Image';
import About from './About'
import Contact from './Contact';
import Link from './Link';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Page">
        <Nav/>
        <Image />
        <About />
        <Contact />
        <Message />
        <Link />
        <Footer />
      </div>
    );
  }
}

export default App;
