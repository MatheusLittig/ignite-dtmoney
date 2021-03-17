import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createServer } from 'miragejs'
import { transactions } from './fakes/data/transactions'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return transactions
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);