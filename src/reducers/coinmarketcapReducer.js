export default (state = {fiat: 'USD'}, action) => {
    switch (action.type) {
      case 'GET_CURRENCIES':
      return {
        ...state,
        currencyList: action.data
      };
      case 'SET_FIAT':
      return {
        ...state,
        fiat: action.data
      };
      case 'SET_CURRENCY':
      return {
        ...state,
        currency: action.data
      };
      default:
        return state;
    }
  };