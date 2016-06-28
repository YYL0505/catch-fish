import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from './component/App'
import HotProduct from './component/HotProduct'
import CompanyInfo from './component/CompanyInfo'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HotProduct}/>
            <Route path="/company-info" component={CompanyInfo}/>
        </Route>
    </Router>
), document.getElementById('app'));