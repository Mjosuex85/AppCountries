import React from 'react'
import style from './loading.modudle.css'
import gif from './giphy.gif'

const Loading = () => {
  return (
    <div>
      <img src={gif} alt="" width="120" height="120" />
    </div>
  )
};

export default Loading