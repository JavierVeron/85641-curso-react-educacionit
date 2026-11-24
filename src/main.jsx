import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { createStore } from 'redux'
import CartReducer from './Clase10/redux/CartReducer.jsx'

const store = createStore(CartReducer);

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)