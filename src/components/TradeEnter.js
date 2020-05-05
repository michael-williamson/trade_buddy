import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {createTrade,fetchTrades} from '../actions/index';
import {Link} from 'react-router-dom';

class TradeEnter extends Component {

    onSubmit = formValues => {
        this.props.createTrade(formValues);
    }

    renderInput({input,name,label}){

        return (
            <div className="field" style={{margin:'20px 50px', width: '50%'}}>
                <label>{label}</label>
                <input {...input}/>
            </div>
        );
    }

    /** handleSubmit is a prop off of redux-form,  here I'm using it as a replacement for preventDefault */

    render() {
        return (  
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="Ticker" label="Enter Ticker/Symbol" component={this.renderInput}/>
                    <Field name="BuyPrice/ShortPrice" label="Buy Price/Short Price" component={this.renderInput}/>
                    <Field name="SellPrice/CoverPrice" label="Sell Price/Cover Price" component={this.renderInput}/>
                    <Field name="#OfShares" label="# of Shares" component={this.renderInput}/>
                    <button className="ui button primary">Submit</button>
                    <Link to="/pages/trade_view">to pages</Link>
                </form>
        );  
    }
}

const mapStateToProps =  state => {
    return {
        trades: state.trades
    }
}

export default connect(mapStateToProps,{createTrade,fetchTrades})(reduxForm({form: 'enterTradesForm'})(TradeEnter));

