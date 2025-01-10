import BarraDeNavegacao from "../components/BarraDeNavegacao"
import SessaoPrimaria from "../components/SessaoPrimaria"
import SessaoSecundario from "../components/SessaoSecundario"
import "../css/home.css"
export default function Home(){
  const informacoes ={
    contato:"Contato",
    projeto: "Projetos",
    sobre: "Sobre"
  }
  return (
    <div className="div-container">
      <div className="primeiraTela">
      <BarraDeNavegacao nome={"Rafael Brandão"} informacao={informacoes} ></BarraDeNavegacao>
      <SessaoPrimaria></SessaoPrimaria>
      </div>
      <div className="segundaTela">
      <SessaoSecundario></SessaoSecundario>
      </div>
    </div>
  )
}