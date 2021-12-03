import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from '@/globalStyles'
import { App } from '@/App'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
