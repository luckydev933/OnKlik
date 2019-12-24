import React, { Component } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BarangPage from './components/master/barang/Master_barang';
import StokPage from './components/master/stok/Master_stok';
import HargaPage from './components/master/harga/Master_harga';
import HomePage from './components/master/Home/Master_home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route path='/' exact component={HomePage} />
          <Route path='/barang' component={BarangPage} />
          <Route path='/harga' component={HargaPage} />
          <Route path='/stok' component={StokPage} />
        </React.Fragment>
      </Router>
    )
  }
}
