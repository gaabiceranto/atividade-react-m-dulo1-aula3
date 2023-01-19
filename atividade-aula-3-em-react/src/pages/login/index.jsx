import '../../App.css';
import Button from '../../components/Button';
import Title from '../../components/Title/Index';
import Input from '../../components/Input';
import Span from '../../components/Link';
import {useNavigate} from "react-router-dom";



const App = () => {
    const navigate = useNavigate()

    const vaParaHome = () => {
        navigate("/home");

    } 


  return (
    <div className="container">
      <Title title="login" />
      <Input label="Usuário" />
      <Input label="Senha" />
      <Button text="Entrar" redirecionar={vaParaHome} />
      
      <Span span="Esqueceu a senha?"/>
    </div>
  );
}

export default App;