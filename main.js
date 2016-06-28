import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import {createHashHistory} from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import App from './component/App'
import HotProduct from './component/HotProduct'
import CompanyInfo from './component/CompanyInfo'
import Contact from './component/Contact'

render((
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HotProduct}/>
            <Route path="/company-info" component={CompanyInfo}/>
            <Route path="/product-list" component={HotProduct}/>
            <Route path="/contact-us" component={Contact}/>
        </Route>
    </Router>
), document.getElementById('app'));