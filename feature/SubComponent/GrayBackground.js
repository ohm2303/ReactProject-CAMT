import React from 'react'
const GrayBackground = (props) => {
    const {children,css}=props
    return <div className={`GrayBackground ` + css}>{children}</div>
}

export default GrayBackground;

//GlobalStyle