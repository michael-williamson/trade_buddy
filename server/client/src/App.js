import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import TradeEnter from './components/TradeEnter';
import MainPage from './components/MainPage';
import TradeView from './components/TradeView'; 


function App() {
  return (
    <div className="">
      <Header/>
        <BrowserRouter>
          <Route path="/pages" exact component={MainPage}/>
          <Route path='/pages/trade_enter' exact component={TradeEnter}/>
          <Route path="/pages/trade_view" exact component={TradeView}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
