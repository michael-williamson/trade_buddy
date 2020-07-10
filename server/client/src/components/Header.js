import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';
import {Link} from 'react-router-dom';
import stockImage from '../images/stockImage.jpg';

class Header extends Component {
    render() {
        return (
            <header className="ui header center aligned blue" style={{position:'relative', padding:'40px 0', backgroundColor:"yellow", backgroundImage: `url(${stockImage})`}}>
                <Link to="/">
                    <h1 style={{color:'white'}}>
                        Trade Buddy
                    </h1>
                </Link>
                <h4 style={{color:'white',backgroundColor:'red',margin:'30px auto'}}>
                    Organize  Stock Trades and Keep Track of Progress
                </h4>
                <div style={{position:'absolute',top:'0',right:'0'}}>
                <GoogleAuth/> 
                </div>
                <div style={{display:'flex', justifyContent:'space-around', width:'74%',margin:'0 auto'}}>
                <Link to="/pages/trade_view" className="ui button primary">View Trades</Link>
                <Link to="/pages/trade_enter" className="ui button primary">Enter Trades</Link>
                <Link to="/pages/analysis" className="ui button primary">Analysis</Link>
                </div>
            </header>
        );
    }
}

export default Header;