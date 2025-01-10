import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../css/containerCard.css";

export default function ContainerCard(props){
  return(
    <aside className="container-aside">
      <article className="container-info">
        <p className="paragrafo-titulo text-light">{props.titulo}</p>
        <p className="paragrafo-titulo">{props.descricao}</p>
        <div className="div-infomacoes">
          <p className="paragrafo-titulo text-light">INFORMAÇÕES DO PROJETO</p>
          <hr className="text-light"/>
          <span className="d-flex w-100 justify-content-between">
            <p className="info-ano text-light">Ano</p>
            <p className="info-dataAno text-light">2024</p>
          </span>
          <hr className="text-light text-light"/>
          <span className="info-caracteristica d-flex justify-content-between">
            <p className="text-light">Características</p>
            <p className="text-light">Front-end Developer</p>
          </span>
          <hr className="text-light"/>
        </div>
        <span className="span-links-projeto d-flex gap-5 ">
          <a  className='' href="https://www.google.com.br/">DEMOSTRAÇÃO AO VIVO<GitHubIcon className='icon'  sx={{ fontSize:40, color: "blue", marginLeft: 1}}></GitHubIcon></a>
          <a href="https://www.google.com.br/">VEJA NO GITHUB<ArrowOutwardIcon className='icon'  sx={{ fontSize:40, color: "blue", marginLeft: 1 }}></ArrowOutwardIcon></a>

        </span>
      </article>
    </aside>
  )
}