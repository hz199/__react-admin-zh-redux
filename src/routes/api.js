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
  },
  {
    name: 'LoadingPage',
    path: '/app/components/loading',
    component: asyncImport(() => import('../containers/ComponentsPage/LoadingPage.jsx')),
    meta: {
      title: 'LoadingPage',
      rules: ['loginRequired']
    }
  },
  {
    name: 'Draggable',
    path: '/app/components/draggable',
    component: asyncImport(() => import('../containers/ComponentsPage/Draggable.jsx')),
    meta: {
      title: '拖拽组件',
      rules: ['loginRequired']
    }
  },
  /* ComponentsPage end */
  {
    name: 'CssModules',
    path: '/app/cssModules',
    component: asyncImport(() => import('../containers/CssModules')),
    meta: {
      title: 'css模块化',
      rules: ['loginRequired']
    }
  },
  {
    name: 'lineAndBar',
    path: '/app/echarts/lineAndBar',
    component: asyncImport(() => import('../containers/Echarts/LineBar')),
    meta: {
      title: '折线柱状图',
      rules: ['loginRequired']
    }
  }
]

export default routes