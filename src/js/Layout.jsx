import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import '../css/custom.css'
import Login from './pages/Login';
import Home from './components/Home';
import Header from './Header';

class Layout extends Component {
    render() {
        return (
            <div>
				<BrowserRouter>
					<div className="smoke">
						<Header />
						<Route exact path="/" component={Home}/>
						<Route path="/login" component={Login}/>
					</div>
				</BrowserRouter>
            </div>
        );
    }
}

export default Layout;