export default function About() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Sobre este Projeto</h1>

      <p>
        Este projeto foi desenvolvido por <strong>Kauê de Oliveira Silva</strong> como parte do <strong>Desafio 1</strong> da <strong>Zetta Lab</strong>. 
        O objetivo foi criar uma aplicação responsiva que consome uma API pública e apresenta suas informações de forma visual.
      </p>

      <h2 className="mt-4 mb-2">Especificações Técnicas</h2>
      <ul>
        <li>Utilização de uma API pública com retorno em JSON (neste caso, a <strong>NASA APOD API</strong>).</li>
        <li>Framework front-end: <strong>React</strong> com <strong>TypeScript</strong>.</li>
        <li>Estilização usando <strong>Bootstrap 5</strong> e <strong>SASS/SCSS</strong>.</li>
        <li>Cores, layout e imagens totalmente personalizáveis.</li>
      </ul>

      <h2 className="mt-4 mb-2">Requisitos da Aplicação</h2>
      <ul>
        <li>Código dos componentes totalmente de autoria própria (sem plugins reutilizados).</li>
        <li>Mínimo de 3 rotas, todas consumindo a API.</li>
        <li>Componentização do menu e do rodapé.</li>
        <li>Layout responsivo considerando os breakpoints Bootstrap 5:
          <ul>
            <li>X-Small &lt; 576px</li>
            <li>Medium ≥ 768px</li>
            <li>Large ≥ 992px</li>
          </ul>
        </li>
        <li>Controle de versão usando <strong>Git</strong>, com commits claros e organizados.</li>
        <li>Armazenamento do código em repositório público no GitHub para avaliação.</li>
      </ul>

      <h2 className="mt-4 mb-2">Funcionalidades Implementadas</h2>
      <ul>
        <li>Visualização da imagem do dia (APOD) com título e explicação detalhada.</li>
        <li>Botão de favoritar imagens, salvando localmente no <strong>localStorage</strong> e criando uma galeria de favoritos.</li>
        <li>Página de imagem aleatória, explorando fotos históricas da NASA.</li>
        <li>Design responsivo e consistente com tema escuro, utilizando SCSS para personalizações visuais.</li>
      </ul>

      <p className="mt-4">
        Este projeto demonstra habilidades em organização de código, componentização, uso de APIs, controle de versão e criatividade na apresentação visual de dados. 
        Ele reflete as boas práticas de desenvolvimento exigidas pelo desafio e foi desenvolvido integralmente por <strong>Kauê de Oliveira Silva</strong>.
      </p>
    </div>
  );
}
