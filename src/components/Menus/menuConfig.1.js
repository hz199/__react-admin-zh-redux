
const menus = [
  {
    type: 'pie-chart',
    title: 'Option 11',
    path: '/chart'
  },
  {
    type: 'desktop',
    title: 'Option 11999',
    path: '/desktop'
  },
  {
    type: 'user',
    title: 'User',
    SubMenu: [
      {
        type: 'user',
        path: '/user1',
        title: 'Tom'
      },
      {
        title: 'Alex',
        type: 'user',
        SubMenu: [
          {
            type: 'user',
            path: '/user4',
            title: 'Alex4',
          }
        ]
      },
      {
        type: 'user',
        path: '/user2',
        title: 'Bill'
      }
    ]
  },
  {
    type: 'team',
    title: 'Team',
    SubMenu: [
      {
        type: 'team',
        path: '/Team1',
        title: 'Team 1'
      },
      {
        type: 'team',
        path: '/Team2',
        title: 'Team 2'
      }
    ]
  },
  {
    type: 'file',
    title: 'Option 33',
    path: '/option33'
  }
]

export default menus
