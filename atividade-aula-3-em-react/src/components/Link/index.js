function Span(props) {
    function Link(){
        window.location.href = "https://www.google.com/";
    }
    return (
        <div class="divSpan">
          <span onClick={Link}>{props.span}</span>
        </div>
    )
}

export default Span;