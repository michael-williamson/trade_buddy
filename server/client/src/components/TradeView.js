import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchTrades} from '../actions/index';

class TradeView extends Component {

    componentDidMount(){
        this.props.fetchTrades(); 
    }

    renderTrades = () => {
       console.log(this.props.trades,"renderFunction");
      return this.props.trades.map(trade =>{
           return (
               <div>
                   <h2>{trade.Ticker}</h2>
               </div>
           );
       });

    }

    render() {
        return (
            <div>
                {this.renderTrades()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        trades: state.trades
    }
}

export default connect(mapStateToProps,{fetchTrades})(TradeView);