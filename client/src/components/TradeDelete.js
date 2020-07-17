import React, { Component } from 'react';
import Modal from './Modal';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {deleteTrade} from '../actions/index';

class TradeDelete extends Component {

    render() {
        return (
            <div>
                <Modal deleteTrade={this.props.deleteTrade} id={this.props.match.params.id} googleId={this.props.auth.userId}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    auth: state.Auth
    }
}

export default withRouter(connect(mapStateToProps,{deleteTrade})(TradeDelete));