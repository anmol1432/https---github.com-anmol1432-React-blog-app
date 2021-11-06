import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './reducers/root';


const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));// Note: this API requires redux@>=3.1.0

export default store;