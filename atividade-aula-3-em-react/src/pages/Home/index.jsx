import Button from '../../components/Button';
import {useNavigate, useLocation} from "react-router-dom";

function Home(){
    const navigate = useNavigate()
    const location = useLocation()

    const {listaDeUsuarios} = location.state;


    const vaParaLogin = () => {
        navigate("/");
    } 
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {listaDeUsuarios.map((user)=> <li key ={user.id}> {user.email} </li>)}
            </ul>
            <Button text="Volta" aoClicar={vaParaLogin} />
            
        </div>
    )
}

export default Home