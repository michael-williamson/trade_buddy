import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GoogleAuth from './GoogleAuth';
import analyze from '../images/analyze.png';
import tradeView from '../images/trade_view.png';
import tradeEnter from '../images/trade_enter.png';


class MainPage extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1 style={{textAlign:'center', margin:'50px 0'}}>
                    Welcome to Trade Buddy,  this is an application used to keep up with equity Trades.
                    </h1>
                </div>
                <div>
                <Carousel autoPlay>
                <div>
                    <img src={tradeEnter} alt="trade enter page"/>
                    <p className="legend" style={{fontSize:'34px'}}>Enter your Trades</p>
                </div>
                <div>
                    <img src={tradeView} alt="trade view page" />
                    <p className="legend" style={{fontSize:'34px'}}>View Trades in list format</p>
                </div>
                <div>
                    <img src={analyze} alt="analyze page" />
                    <p className="legend" style={{fontSize:'34px'}}>Analyze trades to gauge your performance</p>
                </div>
                <div style={{backgroundColor:'#f35f5f8c',height:'100%'}}>
                    <h1 style={{color:'white'}}>start by signing in with your google account!</h1>
                    <GoogleAuth/>
                </div>
            </Carousel>
            </div>
            </div>
        );
    }
}

export default MainPage;