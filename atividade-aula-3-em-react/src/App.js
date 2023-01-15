import './App.css';
import Title from "./components/Title/Index.js";
import Input from "./components/Input/index.js";
import Button from './components/Button';
import Span from './components/Link';

function App() {
  return (
    <div className="container">
      <Title title="login" />
      <Input label="Usuário" />
      <Input label="Senha" />
      <Button button="Login" />
      <Span span="Esqueceu a senha?"/>


    </div>
  );
}

export default App;
