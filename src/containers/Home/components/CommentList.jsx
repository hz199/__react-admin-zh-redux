import React from 'react'
import { Comment, Tooltip, List, Tag, Avatar } from 'antd'
import PropTypes from 'prop-types'

const liStyle = {
  borderBottom: '1px solid #f4f4f4',
  cursor: 'pointer'
}

const CommentList = (props) => {
  const data = props.dataSource.map(item => {
    return {
      actions: [<Tag color="orange">{item.actions}</Tag>],
      author: item.author,
      avatar: (<Avatar>{item.author.split('')[0]}</Avatar>),
      content: (
        <p>
          {item.content}
        </p>
      ),
      datetime: (
        <Tooltip
          title={item.datetime}
        >
          <span>
            {item.datetime}
          </span>
        </Tooltip>
      )
    }
  })

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <li style={liStyle}>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    ></List>
  )
}

CommentList.propTypes = {
  dataSource: PropTypes.array.isRequired
}

export default CommentList
