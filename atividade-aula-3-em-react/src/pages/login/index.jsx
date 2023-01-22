import '../../App.css';
import Button from '../../components/Button';
import Title from '../../components/Title/Index';
import Input from '../../components/Input';
import Span from '../../components/Link';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';



const App = () => {
    const navigate = useNavigate()
    const [title,setTitle] = useState("Login")
    const [subtitle,setSubtitle] = useState("user")


    const vaParaHome = () => {
        navigate("/home");
    } 

    const mudarTitulo = () => {
        setTitle("Sucesso de Goiás");
    } 

    const mudarSub = (e) => {
      setSubtitle(e.target.value);
    } 
    
        
    


  return (
    <div className="container">
      <Title title={title} />
      <Title title={subtitle}  />
      <Input label="Usuário" aoMudar={mudarSub} />
      <Input label="Senha" />
      <Button text="Entrar" aoClicar={vaParaHome} />
      <Button text="Trocar título" aoClicar={mudarTitulo} />
      <Span span="Esqueceu a senha?"/>
    </div>
  );
}

export default App;