import { asyncImport } from '../utils/routerLoadable'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: asyncImport(() => import('../containers/Home')),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'TestPage',
    path: '/test',
    component: asyncImport(() => import('../containers/TestPage')),
    meta: {
      title: '测试页'
    }
  }
]

export default routes