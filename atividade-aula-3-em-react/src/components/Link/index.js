const Span = (props) => {
    const Link = () =>{
        window.location.href = "https://www.google.com/";
    }
    return (
        <div className="divSpan">
          <span onClick={Link}>{props.span}</span>
        </div>
    )
}

export default Span;