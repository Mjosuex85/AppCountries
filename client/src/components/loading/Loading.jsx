import React from 'react'
import style from './loading.modudle.css'
import gif from './giphy.gif'

const Loading = () => {
  return (
    <div style={{marginTop: '10rem', marginBottom: '80rem'}}>
      <div class="spinner-border text-info" role="status">
      <span class="visually-hidden"></span>
      </div>
    </div>
  )
};

export default Loading