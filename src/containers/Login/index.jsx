
import React from 'react'
import './index.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import * as authServices from '@/services/auth'
import { actionCreators } from '@/redux/modules/auth'

const FormItem = Form.Item

const Login = (props) => {
    const { getFieldDecorator } = props.form

    const handleSubmit = (e) => {
      e.preventDefault()
      props.form.validateFields((err, values) => {
        if (!err) {
          submitAuth(values)
        }
      })
    }

    const submitAuth = async (payload) => {
      const result = await authServices.login(payload)

      if (result.code === 0) {
        window.localStorage && window.localStorage.setItem('react-admin_user', JSON.stringify(result.data))
        props.setUserInfo(result.data)

        props.history.push('/')
      }
    }

    return (
      <div className="login">
        <div className="login-form" >
          <div className="login-logo">
            <span>React Admin</span>
            {/* <p>{ props.userInfo }</p> */}
          </div>
          <Form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
            <FormItem>
              {
                getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名！' }]
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码！' }]
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                )
              }
            </FormItem>
            <FormItem>
              <Checkbox>记住我</Checkbox>
              <span className="login-form-forgot" href="" style={{ float: 'right' }}>忘记密码</span>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
}

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
    setUserInfo (User) {
      dispatch(actionCreators.setUserInfo(User))
    },
  }
}

const WrapperLogin = Form.create({ name: 'LoginForm' })(Login)
export default connect(mapStateToProps, mapDispatchToProps)(WrapperLogin)