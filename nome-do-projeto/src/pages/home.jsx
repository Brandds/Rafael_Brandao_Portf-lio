import BarraDeNavegacao from "../components/BarraDeNavegacao"
import SessaoPrimaria from "../components/SessaoPrimaria"
import SessaoQuarta from "../components/SessaoQuarta"
import SessaoSecundario from "../components/SessaoSecundario"
import SessaoTerceira from "../components/SessaoTerceira"
import { sessaoQuarta, sessaoTerceira } from "../constantes/const"
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
      <div className="terceiraTela">
        <SessaoTerceira titulo={sessaoTerceira.titulo} title={sessaoTerceira.title} subTitle={sessaoTerceira.subTitle} link={sessaoTerceira.link}></SessaoTerceira>
      </div>
      <div className="quartaTela">
        <SessaoQuarta titulo={sessaoQuarta.titulo} subTitle={sessaoQuarta.subTitle}></SessaoQuarta>
      </div>
    </div>
  )
}