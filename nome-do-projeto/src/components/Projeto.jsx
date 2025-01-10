import "../css/projeto.css";
import Card from "./Card";
import ContainerCard from "./ContainerCard";
export default function Projeto(props){
  return(
    <article className="container-projeto">
      <Card imagem="https://i.pinimg.com/736x/06/98/6a/06986a1609bd2fcbd8cb047c789738d0.jpg"></Card>
      <ContainerCard titulo="Promotional landing page for our favorite show" descricao="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."></ContainerCard>
    </article>
  )
}