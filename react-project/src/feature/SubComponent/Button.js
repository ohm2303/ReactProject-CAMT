import React from 'react'
import '../style/Button.css'

export default function Button(props){
  
    const {value , functionBtn,css, style,icon} = props
  return (
    <div>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap" rel="stylesheet"></link>
  <button style={style} className={css+` ButtonNormal`} onClick={functionBtn} >
    <div style={{display:"flex",justifyContent: "center"}}>
      <span className='iconInButtons'>{icon}</span>
      <span className='textInButtons'>{value}</span>
    </div>
  </button>
  </div>
  );
}

