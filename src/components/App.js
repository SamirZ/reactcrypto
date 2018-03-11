import React, { Component } from 'react';
import { Grid, Col, Button, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';

import { getData, setCurrency } from '../actions/coinmarketcapAction';

export class App extends Component {

  componentWillMount(){
    this.props.getData(this.props.fiat);
  }

  // Send to details page after button click
  openDetails = (index) => {
    this.props.setCurrency(index);
    this.props.history.push('/details');
  }

  refresh = () => {
    this.props.getData(this.props.fiat);
  }

  populate = () => {

    let boxesList = [];
    const context = this;

    let fiat = "";

    if(this.props.list)
      boxesList = this.props.list.map(function(currency){

      // Determine fiat currency
      if(currency['price_eur']){
        fiat = (<p>Price: {currency['price_eur']}€</p>);
      }else if(currency['price_cny']){
        fiat = (<p>Price: {currency['price_cny']}¥</p>);
      }else{
        fiat = (<p>Price: {currency['price_usd']}$</p>);
      }

      // Presentation of Cryptocurrencies
      return (
        <Col sm={6} md={3} key={currency.id}>
          <Panel className="Item">
            <Panel.Body>
            <p>Rank: {currency.rank}</p>
            { fiat }
            <p>Symbol: {currency.symbol}</p>
            <p>24h Change: {currency.percent_change_24h}%</p>
            </Panel.Body>
            <Panel.Footer>
              <Button 
                bsStyle="primary" 
                onClick={()=>context.openDetails(currency.rank-1)}>
                  More Info
              </Button>
            </Panel.Footer>
          </Panel>
        </Col>);
    });

    return boxesList;
  }

  render() {
    return (
      <div>

        <Grid>
          <Col sm={12} md={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
            <Button bsSize="large" onClick={()=>this.refresh()}> Refresh</Button>
          </Col>
          { this.populate() }
        </Grid>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.coinmarketcap.currencyList,
    fiat: state.coinmarketcap.fiat
  }
};

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(getData(data)),
  setCurrency: (data) => dispatch(setCurrency(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
