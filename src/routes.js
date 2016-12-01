import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import AppLayout from './AppLayout'

import LoginPage from './login/LoginPage'

import NotFoundPage from './NotFoundPage'

import ItemLayout from './items/ItemLayout'
import IndexSidebar from './items/IndexSidebar'
import ItemSidebar from './items/ItemSidebar'
import ItemIndexPage from './items/ItemIndexPage'
import ItemShowPage from './items/ItemShowPage'

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

    <Route path="items" component={ItemLayout}>
      <IndexRoute components={{sidebar: IndexSidebar, main: ItemIndexPage}} />
      <Route path=":id" components={{sidebar: ItemSidebar, main: ItemShowPage}} />
    </Route>

    <Route path="*" component={NotFoundPage} />
  </Route>
)