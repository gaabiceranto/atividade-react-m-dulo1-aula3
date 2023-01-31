import '../../App.css';
import Button from '../../components/Button';
import Title from '../../components/Title/Index';
import Input from '../../components/Input';
import Span from '../../components/Link';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import Subtitle from '../../components/Subtitle/Index';



const App = () => {
    const navigate = useNavigate()
    const [title,setTitle] = useState("Login")
    const [showError,setShowError] = useState(false)
    const [nomedeUsuario,setNomeDeUsuario] = useState("")
    const [senha,setSenha] = useState("")
    const [inputColor,setInputColor] = useState("")
    const [usuarios] = useState([
      {
        id:1,
        name:"marcelo",
        email:"marcelo@hotmail.com",
        password:"oidevs",
      },
      {
        id:2,
        name:"rafael",
        email:"rafael@gmail.com",
        password:"oidevs",
      },
      {
        id:3,
        name:"vitoria",
        email:"vitoria@gmail.com",
        password:"oidevs",
      },
      {
        id:4,
        name:"daniela",
        email:"daniela@gmail.com",
        password:"oidevs",
      },
      {
        id:5,
        name:"taila",
        email:"taila@gmail.com",
        password:"oidevs",
      },
      {
        id:6,
        name:"marcos",
        email:"marcos@gmail.com",
        password:"oidevs",
      },
      
    ]);

    const vaParaHome = () =>{
      console.log(nomedeUsuario);
      console.log(senha);

      const usuarioEscolhido = usuarios.find(
        usuario => usuario.email === nomedeUsuario && usuario.password === senha)

      if (usuarioEscolhido){
        navigate('/home', {state:{ listaDeUsuarios:usuarios, UsuArio: usuarioEscolhido}})


      }else {
        setShowError(true)
        setInputColor("#ff0000")
      }
      
      console.log(usuarioEscolhido)
      
    }


    const mudarTitulo = () => {
        setTitle("Sucesso de Goiás");
    } 

   

    
    
        
    


  return (
    <div className="container">
      <Title title={title} />
      {showError === true ?  (<Subtitle text ={"Credenciais Inválidas"} />) : (<Title title={"Ainda não digitou"} />)}

   

      
      
      <Input 
        label="Usuário" 
        cor= {inputColor}
        aoMudar={(e)=>setNomeDeUsuario(e.target.value)} />


      <Input 
        label="Senha"
        cor= {inputColor}
        hideContent
        aoMudar={(e)=>setSenha(e.target.value)} />
      
      <Button text="Entrar" aoClicar={vaParaHome} />
      <Button text="Trocar título" aoClicar={mudarTitulo} />
      <Span span="Esqueceu a senha?"/>

    

    </div>
  );
}

export default App;