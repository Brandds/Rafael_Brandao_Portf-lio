import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { sessaoPrincipal } from "../constantes/const";
import "../css/SessaoPrimaria.css";
import MinhaImagem from "../imgs/IMG_20220304_215313_521.webp";
import Button from "./Button";

export default function SessaoPrimaria(){
  return(
    <section className="section">
      <article className="article-Titulo">
        <div className="w-75">
          <p id="titulo" className="text-light">{sessaoPrincipal.titulo}</p>
          <p id="subTitulo" className="text-light">{sessaoPrincipal.subTitulo}.</p>
          <div className="div-btn-icons-informacoes">
            <Button></Button>
            <a href="https://www.google.com.br/"><LinkedInIcon sx={{ fontSize:40 }} color="primary"></LinkedInIcon></a>
            <a href="https://www.google.com.br/"><GitHubIcon  sx={{ fontSize:40, color: "white" }}></GitHubIcon></a>

          </div>
        </div>

      </article>
      <article className="article-Imagem">
        <img className="minhaImagem" src={MinhaImagem}/>
      </article>
    </section>
  )
}