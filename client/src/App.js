import React,{Component} from 'react';
import {Router, Route, Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/Header';
import TradeEnter from './components/TradeEnter';
import MainPage from './components/MainPage';
import TradeView from './components/TradeView'; 
import NoMatch from './components/NoMatch';
import history from './history';
import moment from 'moment';
import TradeDelete from './components/TradeDelete';
import Analysis from './components/Analysis';



class App extends Component {

  date = moment().format().slice(0,10);//passing initial date value to tradeEnter form page
  
  render(){
  return (
    <div className="ui container"style={{height:'100vh', background:'rgb(247, 247, 247)'}}>
        <Router history={history}>
          <Header/> 
          <div>
          <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path="/pages/trade_enter" exact>
            {this.props.auth ? <TradeEnter initialValues={{ticker:{date:this.date,shortOrLong:'long',typeOfTrade:'Day Trade'}}}/>: <Redirect to="/"/>}
          </Route>
          <Route path="/pages/trade_view" exact>
            {this.props.auth ? <TradeView/> : <Redirect to="/"/>}
          </Route>
          <Route path="/pages/trade_delete/:id" exact>
            {this.props.auth ? <TradeDelete/> : <Redirect to="/"/>}
          </Route>
          <Route path="/pages/analysis" exact>
              {this.props.auth ? <Analysis/> : <Redirect to="/"/>}
          </Route>
          <Route>
            <NoMatch/>
          </Route>
          </Switch>
          </div>
        </Router>
    </div>
  );}
}

const mapStateToProps = state => {
  return{
  auth:state.Auth.isSignedIn
  }
}

export default connect(mapStateToProps)(App);
