import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from "react-router-dom";
import { createStore } from 'redux';
import ticketListReducer from './reducers/ticket-list-reducer'
import { Provider } from 'react-redux';


const store = createStore(ticketListReducer);

ReactDOM.render (
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
