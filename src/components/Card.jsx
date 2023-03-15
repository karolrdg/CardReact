import "./card.css";


function Card({ usuario }) {
  return (
    <div className="card">
      <img className="card-logo" src={usuario.foto} alt={usuario.nome} />

      <div className="card-dados">
        <h1>{usuario.nome}</h1>
        <h2>Idade: {usuario.idade} anos</h2>

        <div className="card-contatos">
          <a href={usuario.github} target="_blank">
            <box-icon
              type="logo"
              name="github"
              color= "#8dcdff"
              size="md"
              title="Link para o GitHub"
            ></box-icon>
          </a>
          <a href={usuario.linkedin} target="_blank">
            <box-icon
              type="logo"
              name="linkedin"
              color="#8dcdff"
              size="md"
              title="Link para o LinkedIn"
            ></box-icon>
          </a>
          <a href={usuario.whatsapp} target="_blank">
            <box-icon
              type="logo"
              name="whatsapp"
              color="#8dcdff"
              size="md"
              title="Link para o WhatsApp"
            ></box-icon>
          </a>
          <a href={usuario.insta} target="_blank">
            <box-icon
              type="logo"
              name="instagram"
              color="#8dcdff"
              size="md"
              title="Link para o Instagram"
            ></box-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card
