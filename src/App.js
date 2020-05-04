import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import TradeEnter from './components/TradeEnter';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="">
      <Header/>
        <BrowserRouter>
          <Route path="/" exact component={MainPage}/>
          <Route path='/pages/trade_enter' exact component={TradeEnter}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
