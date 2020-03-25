import * as Sentry from '@sentry/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './store';
import './i18n';
import { IConfig } from './entities/Config';

declare var config: IConfig;

config.sentry.enabled && Sentry.init({dsn: "https://ac5293b1fd4c465aba1a0ba03f5c0c7b@sentry.io/5174319"});

ReactDOM.render((
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
