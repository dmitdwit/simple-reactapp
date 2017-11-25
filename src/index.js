import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './js/Layout';
import 'bootstrap/dist/css/bootstrap.css'
import './css/custom.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
