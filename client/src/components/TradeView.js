import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchTrades,deleteTrade,resetTrades} from '../actions/index';
import {Link,withRouter} from 'react-router-dom';

class TradeView extends Component {
    componentDidMount(){
        this.props.fetchTrades({id:this.props.id});
    }

    componentDidUpdate(prevProps){
        if(this.props.id !== prevProps.id){
        this.props.fetchTrades({id:this.props.id});
        }
    }

    componentWillUnmount(){
        this.props.resetTrades();   
    }

    renderTrades = () => {
        if(this.props.trades.length === 0){
            return <tr><td>Loading...</td></tr>
        }else{
           return this.props.trades.map((trade,index)=>{
                return(
                    <tr key={trade._id} data-id={trade._id}>
                        <td>{trade.ticker}</td>
                        <td>{trade.typeOfTrade}</td>
                        <td>{trade.shortOrLong}</td>
                        <td>{trade.shortPrice === undefined ? "n/a": trade.shortPrice}</td>
                        <td>{trade.coverPrice === undefined ? "n/a": trade.coverPrice}</td>
                        <td>{trade.buyPrice === undefined ? "n/a": trade.buyPrice}</td>
                        <td>{trade.sellPrice === undefined ? "n/a": trade.sellPrice}</td>
                        <td>{trade.numberOfShares}</td>
                        <td>{trade.startDate}{trade.endDate ? ` thru ${trade.endDate}`: ""}</td>
                        <td><Link to={`/pages/trade_delete/${trade._id}`} className="ui button">Delete</Link></td>
                    </tr>
                );               
            }              
                )}
            }

    render() {
        return (
                <table className="ui celled blue inverted table">
                    <thead>
                        <tr>
                            <th>Ticker:</th>
                            <th>Duration:</th>
                            <th>Short/Long:</th>
                            <th>Short Price:</th>
                            <th>Cover Price:</th>
                            <th>Buy Price:</th>
                            <th>Sell Price:</th>
                            <th>Number of Shares:</th>
                            <th>Dates:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTrades()}
                    </tbody>
                </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trades: state.trades,
        id: state.Auth.userId
    }
}

export default withRouter(connect(mapStateToProps,{fetchTrades,deleteTrade,resetTrades})(TradeView));