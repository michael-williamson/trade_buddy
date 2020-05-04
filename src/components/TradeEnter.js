import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {createTrade} from '../actions/index';

class TradeEnter extends Component {

    onSubmit = formValues => {
        this.props.createTrade(formValues);
    }

    /** handleSubmit is a prop off of redux-form,  here I'm using it as a replacement for preventDefault */

    render() {
        return (  

                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="Ticker/Symbol" label="Enter Ticker/Symbol" component="input"/>
                    <button>test</button>
                </form>
        );
    }
}



export default connect(null,{createTrade})(reduxForm({form: 'enterTradesForm'})(TradeEnter));

