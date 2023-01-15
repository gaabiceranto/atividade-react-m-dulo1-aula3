function Button(props) {
    function login(){
        window.location.href = "https://discord.com/channels/1014299053149929473/1062175752612745266";
    }
    return (
        <div>
          <button onClick={login}>{props.button}</button>
        </div>
    )
}

export default Button;