import React from 'react'
import style from './loading.modudle.css'
import gif from './giphy.gif'

const Loading = () => {
  return (
    <div>
      <img src={gif} alt="" width="180" height="180" />
    </div>
  )
};

export default Loading