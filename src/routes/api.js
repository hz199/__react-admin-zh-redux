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
  }
]

export default routes