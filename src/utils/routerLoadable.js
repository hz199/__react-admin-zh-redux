import React from 'react'
import loadable from 'react-loadable'
import LoadingView from '../components/Loading'

function asyncImport(loader) {
  function Loading(props) {
    if (props.error)
      return <div> Error! </div>
    else if (props.pastDelay)
      return <LoadingView/>
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
