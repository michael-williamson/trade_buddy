import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="ui header center aligned blue" style={{ padding:'40px 0'}}>
                <h1>
                    Trade Buddy
                </h1>
                <h4>
                    Organize  Stock Trades and Keep Track of Progress
                </h4>
            </header>
        );
    }
}

export default Header;