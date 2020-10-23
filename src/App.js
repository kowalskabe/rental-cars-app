import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import PageWrapper from "./components/pageWrapper/PageWrapper";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";

function App() {
    return (
        <Router>
            <PageWrapper />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
