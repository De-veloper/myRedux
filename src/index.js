import React from 'react';
import ReactDOM from 'react-dom';
//Import react redux
import { Provider } from 'react-redux'

//import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';


//import store
import store from './store/configureStore'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
