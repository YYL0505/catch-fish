import React from 'react';
import {Router, Route, browserHistory} from 'react-router'

import HotProduct from './HotProduct'

class Layout extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={HotProduct}>
                </Route>
            </Router>
        );
    }
}

export default Layout

