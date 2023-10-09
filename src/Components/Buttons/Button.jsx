const Button = (props)=>{
    return (
        <>
             <button onClick={(e) => {e.preventDefault(); props?.callBack(props?.params)}} className="base-button">{props.text}</button>
        </>
    )
}

export default Button;