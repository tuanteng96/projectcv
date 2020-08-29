import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './../about/About';
import Blog from './../blog/Blog';
import Resume from './../resume/Resume';
import Portfolio from './../portfolio/Portfolio';
import Contact from './../contact/Contact';

class DirectionalUrl extends Component {
    render() {
        return (
                <div className="w-100">
                    <Switch>
                        <Route exact path="/">
                            <About />
                        </Route>
                        <Route path="/gioi-thieu">
                            <About />
                        </Route>
                        <Route path="/ly-lich-ho-so">
                            <Resume />
                        </Route>
                        <Route path="/san-pham-ca-nhan">
                            <Portfolio />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/lien-he">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
        );
    }
}

export default DirectionalUrl;