import React, { Component } from 'react';
import { Grid, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setFiat } from '../../actions/coinmarketcapAction';

export class Settings extends Component {

    onSubmit = (value) => {
        this.props.setFiat(value);
    };

    render() {
        return (
            <Grid>
                <h4>Slelect desired currency:</h4>
                <ToggleButtonGroup type="radio" name="options" defaultValue={this.props.fiat}>
                    <ToggleButton value={"USD"} onClick={()=>this.onSubmit('USD')}> USD </ToggleButton>
                    <ToggleButton value={"EUR"} onClick={()=>this.onSubmit('EUR')}> EUR </ToggleButton>
                    <ToggleButton value={"CNY"} onClick={()=>this.onSubmit('CNY')}> CNY </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
      fiat: state.coinmarketcap.fiat
    }
  };
  
const mapDispatchToProps = (dispatch) => ({
    setFiat: (value) => dispatch(setFiat(value))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Settings);