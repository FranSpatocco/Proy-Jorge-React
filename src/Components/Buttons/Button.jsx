const Button = (props)=>{
    return (
        <>
             <button onClick={(e) => {e.preventDefault(); props?.callBack(props?.params)}} class="boton">{props.text}</button>
        </>
    )
}

export default Button;