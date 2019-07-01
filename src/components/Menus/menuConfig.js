
const menus = [
  {
    icon: 'pie-chart',
    title: '首页',
    path: '/app'
  },
  {
    icon: 'desktop',
    title: '登录测试页',
    path: '/app/test'
  },
  {
    icon: 'table',
    title: '表格',
    SubMenu: [
      {
        icon: 'table',
        path: '/app/tables/table1',
        title: '基础表格'
      }
    ]
  },
]

export default menus
