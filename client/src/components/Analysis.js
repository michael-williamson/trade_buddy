import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchDayTrades,fetchSwingTrades,resetTrades} from '../actions/index';




class Analysis extends Component {

    state = {
        date: new Date().toISOString().substring(0,10),
    }

    componentWillUnmount(){
        this.props.resetTrades(); 
    }

    displayAnalysis = () => {
        let typeOfTrades; 
        let numOfTrades = 0;
        let winningTrade = 0;
        let losingTrade = 0;
        let gains = 0;
        let loses = 0;
        let shortCount = 0;
        let longCount = 0; 


        if(this.props.trades === []){
            return
        }
        if(this.props.trades.length > 0){
            if(this.props.trades[0].message){
            return <h1 style={{textAlign:'center'}}>{this.props.trades[0].message}</h1>
            }
            if(this.props.trades[0].typeOfTrade === "Day Trade"){
                typeOfTrades = 'Day Trades';
                numOfTrades = this.props.trades.length; 
                this.props.trades.forEach((trade)=> {

                    if(trade.shortOrLong === "short"){
                        shortCount++;
                        let result = (parseFloat(trade.shortPrice) - parseFloat(trade.coverPrice)).toFixed(2) * parseFloat(trade.numberOfShares);
                        if(result > 0){
                        gains = result + gains; 
                        winningTrade++; 
                        }else if(result < 0){
                        loses = result + loses;   
                        losingTrade++;
                        }
                    }if(trade.shortOrLong === "long"){
                        longCount++; 
                        let result = (parseFloat(trade.sellPrice) - parseFloat(trade.buyPrice)).toFixed(2) * parseFloat(trade.numberOfShares);
                        if(result > 0){
                        gains = result + gains; 
                        winningTrade++; 
                        }else if(result < 0){
                        loses = result + loses;   
                        losingTrade++;
                        }                        
                    }
                });
            }
            if(this.props.trades[0].typeOfTrade === "Swing Trade"){
                typeOfTrades = 'Swing Trades';
                numOfTrades = this.props.trades.length; 
                this.props.trades.forEach((trade)=> {

                    if(trade.shortOrLong === "short"){
                        shortCount++;
                        let result = (parseFloat(trade.shortPrice) - parseFloat(trade.coverPrice)).toFixed(2) * parseFloat(trade.numberOfShares);
                        if(result > 0){
                        gains = result + gains; 
                        winningTrade++; 
                        }else if(result < 0){
                        loses = result + loses;   
                        losingTrade++;
                        }
                    }if(trade.shortOrLong === "long"){
                        longCount++; 
                        let result = (parseFloat(trade.sellPrice) - parseFloat(trade.buyPrice)).toFixed(2) * parseFloat(trade.numberOfShares);
                        if(result > 0){
                        gains = result + gains; 
                        winningTrade++; 
                        }else if(result < 0){
                        loses = result + loses;   
                        losingTrade++;
                        }                        
                    }
                });
            }
            return(
                <div>
                <h1 style={{color: 'blue', textAlign: 'center'}}>{typeOfTrades}</h1>
                <p style={{fontSize:'24px',width:'74%',margin:'40px auto',lineHeight:'80px'}}>
                   You made <span style={{fontSize:'36px'}}>{numOfTrades}</span> {typeOfTrades} with <span style={{fontSize:'36px'}}>{winningTrade}</span> winning trade(s) and <span style={{fontSize:'36px'}}>{losingTrade} </span>
            losing trade(s).  You had <span style={{fontSize:'36px', color:'green'}}>${gains}</span> in gains and <span style={{fontSize:'36px', color:'red'}}>${loses}</span> in loses.  With a sum total of <span style={{fontSize:'36px'}}>${gains + loses}</span>
            . You had <span style={{fontSize:'36px'}}>{shortCount}</span> short trade(s) and <span style={{fontSize:'36px'}}>{longCount}</span> long trade(s).
                </p>
                </div>
            );
        }   
    }

    render() {
        console.log(this.state.date)
        return (
            <div style={{backgroundColor:'#f7f7f7'}}>
               <h1 style={{textAlign:'center'}}>Analysis page</h1>
               <div style={{display:'flex',flexDirection:'column', width:'25%', margin:'0 auto'}}>
                    <button onClick={()=>this.props.fetchDayTrades(this.props.auth.userId)} className="ui green button" style={{margin:'10px 0'}}>Day Trades</button>
                    <button onClick={()=>this.props.fetchSwingTrades(this.props.auth.userId)} className="ui green button" style={{margin:'10px 0'}}>Swing Trades</button>
                    <div>
                    <input type="date"  value={this.state.date} onChange={e=>this.setState({date:e.target.value})} style={{display:'block', margin:'10px auto'}}/> 
                    <button onClick={()=>this.props.fetchDayTrades(this.props.auth.userId,this.state.date)} class="ui green button" style={{width: '100%', margin:'10px 0 0'}}>search by date Day Trades</button>
                    <button onClick={()=>this.props.fetchSwingTrades(this.props.auth.userId,this.state.date)} class="ui green button" style={{width: '100%', margin:'10px 0 40px'}}>search by date Swing Trades</button>
                    </div>
                </div>
                {this.displayAnalysis()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    auth: state.Auth,
    trades: state.trades
    }
}

export default connect(mapStateToProps,{fetchDayTrades,fetchSwingTrades,resetTrades})(Analysis);