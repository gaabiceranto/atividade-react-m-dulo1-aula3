const Button = ({text, redirecionar})=>{
  
    return (
        
          <button onClick={redirecionar}>{text}</button>
        
    )
}

export default Button;