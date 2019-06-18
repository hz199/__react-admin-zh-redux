import { asyncImport } from '../utils/routerLoadable'

const routes = [
  {
    name: '/',
    path: '/',
    exact: true,
    component: asyncImport(() => import('../containers/Home')),
    meta: {
      title: '首页'
    }
  },
  {
    name: '404',
    path: '/404',
    exact: true,
    component: asyncImport(() => import('../containers/NoFind')),
    meta: {
      title: '404'
    }
  },
]

export default routes