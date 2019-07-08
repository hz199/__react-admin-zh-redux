import React from 'react';
import loadable from 'react-loadable'

function asyncImport(loader) {
  function Loading(props) {
    if (props.error)
      return <div> Error! </div>
    else if (props.pastDelay)
      return (
        <div>
          正在加载组件数据...
        </div>
      )
    else
      return null
  }

  return loadable({
    loader,
    loading: Loading,
  })
}

export {
  asyncImport
}
