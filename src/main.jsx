import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import CartReducer from './Clase10/redux/CartReducer.jsx'
import ReduxMiddleware from './Clase11/ReduxMiddleware.jsx'

const store = createStore(CartReducer, applyMiddleware(ReduxMiddleware));

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)