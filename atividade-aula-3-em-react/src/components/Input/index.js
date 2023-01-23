import { PropTypes } from "prop-types";

const Input = ({label, hideContent, aoMudar, cor}) => {
    return (
        <div class="inputForm">
            <label style={{color:cor}} for = "input"  >{label}</label> 
            <input type={hideContent ? "password" : "text"}  name="input" onChange={aoMudar}  />
        </div>
    )
}

Input.propType = {
    label: PropTypes.string,
    aoMudar:PropTypes.func,
   
}





export default Input;