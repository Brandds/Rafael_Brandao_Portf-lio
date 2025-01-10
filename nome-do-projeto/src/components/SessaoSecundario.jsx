import "../css/sessaoSecundario.css"
import Projeto from "./Projeto"
export default function SessaoSecundario(){
  return(
    <section className="section-SessaoSecundario">
      <article className="article-Informacoes">
        <p className="titulo-projeto text-light">Projetos em destaque</p>
        <p className="subtitulo-projeto text-light">Here are some of the selected projects that showcase my passion for front-end development.</p>
      </article>
      <article className="article-projeto">
        <Projeto></Projeto>
      </article>
    </section>
  )
}