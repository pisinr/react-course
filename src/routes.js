import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import AppLayout from './AppLayout'
import FullLayout from './FullLayout'

import LoginPage from './LoginPage'
import NotFoundPage from './NotFoundPage'
import DelayPage from './DelayPage'

import IndexSidebar from './IndexSidebar'
import ItemSidebar from './ItemSidebar'


import ItemIndexPage from './ItemIndexPage'
import ItemShowPage from './ItemShowPage'

function delayPage(nextState, replace, callback) {
	setTimeout(()=>{
		callback()
	}, 2000);
}

function denyPage(nextState, replace) {
	replace('/')
}

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={LoginPage} />
    {/*<IndexRedirect to="/login" />*/}
    <Route path="login" component={LoginPage} />
    <Route path="delay" component={DelayPage} onEnter={delayPage}/>
    <Route path="deny" component={NotFoundPage} onEnter={denyPage}/>
    <Route path="items" component={FullLayout}>
      <IndexRoute components={{sidebar: IndexSidebar, main: ItemIndexPage}} />
      <Route path=":id" components={{sidebar: ItemSidebar, main: ItemShowPage}} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
)