import "../css/sessaoTerceira.css"
export default function SessaoTerceira(props){
  return(
    <section className="section-terceira col-12">
      <article className="titulo-Sessao w-50 col-sm-6">
        <p className="tituloDaSessao text-light fs-1" >{props.titulo}</p>
      </article>
      <article className="informacao-Sessao col-sm-6 ">
        <p className="informacao-Title text-light">{props.title}</p>
        <p className="informacao-Subtitulo text-light">{props.subTitle}</p>
        <span>
          <a  href="https://www.google.com.br/">{props.link}</a>
        </span>
      </article>
    </section>
  )
}