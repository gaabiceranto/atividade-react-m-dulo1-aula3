const Input = (props) => {
    return (
        <div class="inputForm">
            <label for = "input">{props.label}</label> 
            <input name="input"/>
        </div>
    )
}

export default Input;