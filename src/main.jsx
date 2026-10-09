import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import './index.css'
import { App } from './App.jsx'
import { store } from '../store/store.js'

const elRoot = document.getElementById('root')
createRoot(elRoot).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
