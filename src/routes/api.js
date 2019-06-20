import { asyncImport } from '../utils/routerLoadable'

const routes = [
  {
    name: 'Home',
    path: '/app',
    component: asyncImport(() => import('../containers/Home')),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'TestPage',
    path: '/app/test',
    component: asyncImport(() => import('../containers/TestPage')),
    meta: {
      title: '权限测试页',
      rules: ['loginRequired']
    }
  }
]

export default routes