import "../css/card.css"

export default function Card(props){
  return(
    <div className="card-Containeir">
      <article className="card-Img">
        <img src={props.imagem}/>
      </article>
    </div>
  )
}