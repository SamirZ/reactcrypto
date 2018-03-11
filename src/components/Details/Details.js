import React, { Component } from 'react';
import { Grid, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getData } from '../../actions/coinmarketcapAction';

export class Details extends Component {

    refresh = () => {
        this.props.getData(this.props.fiat);
    }

    render() {
        let fiat = "";

        // Prop Variables
        let i = this.props.currency;
        let list = this.props.list;

        // Check Fiat Value and Set price
        if(this.props.list[i]['price_eur']>0){
            fiat = (<p>Price: {list[i].price_eur}€ | 
            24h Volume: {list[i]['24h_volume_eur']}€ | 
            Market Cap: {list[i].market_cap_eur}€</p>);
          }else if(this.props.list[i]['price_cny']){
            fiat = (<p>Price: {list[i].price_cny}¥ | 
                24h Volume: {list[i]['24h_volume_cny']}¥ | 
                Market Cap: {list[i].market_cap_cny}¥</p>);
            
          }else{
            fiat = (<p>Price: {list[i].price_usd}$ | 
                24h Volume: {list[i]['24h_volume_usd']}$ | 
                Market Cap: {list[i].market_cap_usd}$</p>);
          }

        return (
            <Grid>
                <Col sm={12} md={12} style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
                    <Button bsSize="large" onClick={()=>this.refresh()}> Refresh</Button>
                </Col>
                <p>Rank: {list[i].rank} </p>
                    <p>Name: {list[i].name} </p>
                    <p>Symbol: {list[i].symbol} </p>
                    {fiat}
                    <p>Price in BitCoin: {list[i].price_btc} </p>
                    <p>1h Change: {list[i].percent_change_1h} | 24h Change: {list[i].percent_change_24h} | 7d Change: {list[i].percent_change_7d} </p>
                    <p>Total Supply: {list[i].total_supply} | Available Supply: {list[i].available_supply} </p>
            </Grid>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        list: state.coinmarketcap.currencyList,
        fiat: state.coinmarketcap.fiat,
        currency: state.coinmarketcap.currency
    }
};

const mapDispatchToProps = (dispatch) => ({
    getData: (data) => dispatch(getData(data))
});
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Details);