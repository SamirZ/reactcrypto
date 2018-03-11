import React from 'react';
import ReactDOM from 'react-dom';
import { Details } from '../../../components/Details/Details';

import { list } from '../Fixtures/CurrencyList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<Details list={list} currency={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
