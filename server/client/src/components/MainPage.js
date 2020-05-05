import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Link to='/pages/trade_enter'>Enter Your Trades</Link>
            </div>
        );
    }
}

export default MainPage;