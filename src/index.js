import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App source={process.env.PUBLIC_URL + '/concerts.json'}/>, document.getElementById('root'));
registerServiceWorker();
