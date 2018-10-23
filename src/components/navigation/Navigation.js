import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Trending from '../trending/Trending.container'
import Random from '../random/Random'
import App from '../../App';
import './Navigation.css'

export default function Navigation() {
    return (
        <div>
            <Router>
                <div className="container-fluid">
                    <div className="navigation">
                        <ul>
                            <li><Link to="/">Search</Link></li>
                            <li><Link to="/trending">Treding</Link></li>
                            <li><Link to="/random">Random</Link></li>
                        </ul>
                        <div className="logo-img">gifphy master</div>
                        <div className="clear"></div>
                    </div>
                    <Route exact path="/" component={App} />
                    <Route path="/trending" component={Trending} />
                    <Route path="/random" component={Random} />
                </div>
                
            </Router>
        </div>
    )
}