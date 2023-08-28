import  "../SubComponent/GrayBackground.css";

const GrayBackground = (props) => {
    const {children,css}=props
    return <div className={`GrayBackground ` + css}>{children}</div>
}

export default GrayBackground;