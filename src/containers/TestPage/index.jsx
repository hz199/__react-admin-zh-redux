import React from 'react'

const TestPage = () => {
  return (
    <div>
      可以把 localStorage react-admin_user 删除再次刷新试下！
      <pre>{
        "<Redirect to='/login'/>"
      }</pre>
      <p>window.localStorage: react-admin_user</p>
    </div>
  )
}

export default TestPage
