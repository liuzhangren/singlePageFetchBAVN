
import React from 'react'
import { Switch, Route, Router } from 'dva/router'
import dynamic from 'dva/dynamic'
import 'antd/dist/antd.css'

const Routers = function ({ history, app }) {
  history.listen((location)=>{
    switch (location.pathname) {
      case '/':
        document.title = 'BAVN 查询'
        break
      case '/test':
        document.title = '测试'
        break
      default:
        document.title = 'BAVN 查询'
        break
    }
  })

  const routes = [
    {
      path: '/',
      models: () => [import('./models/example')],
      component: () => import('./routes/DataList')
    }
  ]

  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(({ path, ...dynamics }, key) => {
            return (
              <Route key={key}
                    path={path}
                    exact={true}
                    component={dynamic({
                      app,
                      ...dynamics,
                    })}
              />
            )
          })
        }
      </Switch>
    </Router>
  )
}

export default Routers