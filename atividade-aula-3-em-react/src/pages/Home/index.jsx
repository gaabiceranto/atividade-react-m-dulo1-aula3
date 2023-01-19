import Button from '../../components/Button';
import {useNavigate} from "react-router-dom";

function Home(){

    const navigate = useNavigate()
    const vaParaLogin = () => {
        navigate("/");
    } 
    return (
        <div>
            <h1>Home</h1>
            <Button text="Volta" redirecionar={vaParaLogin} />
        </div>
    )
}

export default Home