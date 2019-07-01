import React from 'react'
import { Menu, Icon } from 'antd'
import menuConfig from './menuConfig'


// 可展开菜单key
// let rootSubmenuKeys = []
// const getRootSubMenuKey = (menus, subTitle) => {
//   menus.forEach(item => {
//     if (item.SubMenu && item.SubMenu.length > 0) {
//       rootSubmenuKeys.push(subTitle ? item.title + '_' + subTitle : item.title)
//       getRootSubMenuKey(item.SubMenu, item.title)
//     }
//   })
// }

// getRootSubMenuKey(menuConfig)

const injectMenu = (menus) => {
  return menus.map(itemMenu => {
    if (itemMenu.SubMenu && itemMenu.SubMenu.length > 0) {
      return (
        <Menu.SubMenu
          key={itemMenu.title}
          title={
            <span>
              <Icon type={itemMenu.icon} />
              <span>{itemMenu.title}</span>
            </span>
          }
        >
          {
            injectMenu(itemMenu.SubMenu)
          }
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={itemMenu.path}>
          <Icon type={itemMenu.icon} />
          <span>{itemMenu.title}</span>
        </Menu.Item>
      )
    }
  })
}

// 跟菜单
const Menus = (props) => {
  /**
   * menuitem 点击回调
   */
  const handleMenu = (params) => {
    if (params.key !== props.history.location.pathname) {
      props.history.push(params.key)
    }
  }

  /**
   * 默认打开的submenu
   */
  // const [menuOpenKeys, setMenuOpenKeys] = useState([])

  /**
   * 菜单打开回调
   * @param {*} openKeys 
   */
  // const onOpenChange = (openKeys) => {
    // const latestOpenKey = openKeys.find(key => menuOpenKeys.indexOf(key) === -1)
    // if (rootSubtendKeys.indexOf(latestOpenKey) === -1) {
    //   setMenuOpenKeys(openKeys)
    // } else {
    //   setMenuOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    // }
  // }

  return (
    <Menu theme='dark'
      defaultSelectedKeys={[props.history.location.pathname]}
      onClick={handleMenu} mode="inline">
      {
        injectMenu(menuConfig)
      }
    </Menu>
  )
}

export default Menus