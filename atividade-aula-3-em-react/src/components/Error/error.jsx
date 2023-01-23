import Title from "../Title/Index";
import Subtitle from "../Subtitle/Index";


const Error = ({ showError }) => {
    let componenteDeErro ;
        if (showError) {
            componenteDeErro = <Title title="Usuario nao encontrado" />;
        } else {
            componenteDeErro = <Subtitle text="Olá, usuário "/>;
        }
        return (
        <div>
            {componenteDeErro}
            </div>
     );
     };
export default Error
    