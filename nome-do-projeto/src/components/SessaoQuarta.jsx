import "../css/sessaoQuarta.css"

export default function SessaoQuarta(props){
  return(
    <section className="section-quarteto">
      <article className="article-Contatos">
        <p className="titulo text-light fs-1">{props.titulo}</p>
        <p className="subTitle text-light fs-5">{props.subTitle}</p>
        <span className="list-icons"></span>
      </article>
      <article className="article-Copyright">
        <p className="copyright"></p>
      </article>
    </section>
  )
}