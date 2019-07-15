import { asyncImport } from '../utils/routerLoadable'

const routes = [
  {
    name: 'Home',
    path: '/app',
    component: asyncImport(() => import('../containers/Home')),
    meta: {
      title: '首页',
      rules: ['loginRequired']
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
  },
  /* table start */
  {
    name: 'Table1',
    path: '/app/tables/table1',
    component: asyncImport(() => import('../containers/Tables/Table1')),
    meta: {
      title: '基础表格',
      rules: ['loginRequired']
    }
  },
  {
    name: 'DragTable',
    path: '/app/tables/dragTable',
    component: asyncImport(() => import('../containers/Tables/DragTable')),
    meta: {
      title: '拖拽表格',
      rules: ['loginRequired']
    }
  },
  /* table end */
  /* ComponentsPage start */
  {
    name: 'LoadingBar',
    path: '/app/components/loadingBar',
    component: asyncImport(() => import('../containers/ComponentsPage/LoadingBar.jsx')),
    meta: {
      title: 'LoadingBar',
      rules: ['loginRequired']
    }
  }
  /* ComponentsPage end */
]

export default routes