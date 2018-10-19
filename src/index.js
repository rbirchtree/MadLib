import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { madLibReducer } from './reducers';

import App from './App';

const rootReducer = combineReducers({
	form: formReducer,
	madLibReducer	
});

const store = createStore(rootReducer, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));


