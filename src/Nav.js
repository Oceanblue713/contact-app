import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav-logo">
                    <h1>さわだ歯科</h1>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>TEL: 875-4555</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;