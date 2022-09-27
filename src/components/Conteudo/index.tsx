import { Container } from './styles'

interface ConteudoProps{
    pagina:string
}

export function Conteudo({pagina}:ConteudoProps){

    return(
        <Container>
            {
                pagina === 'habilidades_e_idiomas'? 
                <div id='main'>
                    <h1 id="titulo">O Ateliê</h1>
                    <p className="conteudo">O que vem a sua cabeça quando pensa na palavra "Ateliê"? A maioria das pessoas irá responder "Arte" ou algo relacionado, porém, quando usamos "Ateliê" estamos indicando que este é um lugar de criação, de novo, único. </p>
                    <p className="conteudo">Girassol a primeira vista parece ser uma flor, porém é uma inflorescência em que as flores estão muito próximas de si e inseridas em um eixo comum. O girassol tem uma lista grande de como pode ser utilizado, dele se extraí óleo, biocombustível, mel, adubo, entre outras coisas. </p>
                    <p className="conteudo">Juntamos tudo isso por acreditar que cada indivíduo é único e especial, indiferente se é "neurotípico" ou "atípico",  cada um aprende de um um jeito e merece um Ateliê confeccionando um plano educacional  especial só pra ele! Acreditamos na inclusão verdadeira. Assim quando todos nós ficamos bem juntinhos podemos aprender muito mais uns com os outros com nossa imensa diversidade de habilidades e competências, unidos no eixo comum chamado RESPEITO. Agora me conta, o que você achou?!</p>
                </div> 
                : 
                pagina === 'contato'? 
                <div id='main'>
                    <h1 id="titulo">Contato</h1>
                    <p className="conteudo">Tel: (11) 94125-5770</p>
                </div> 
                : 
                <main id='main'>
                    <h1 id="titulo">Formação Acadêmica</h1>
                    <hr />
                    <section className="conteudo">
                        <h2>Graduação</h2>
                        <ul>
                            <li>{"Engenharia Química -> Escola de Engenharia Mauá"}</li>
                            <li>Conclusão: Dezembro de 1988 </li>
                        </ul>
                        <h2>Pós-graduação</h2>
                        <ul>
                            <li>Escola Superior de Propaganda e Marketing</li>
                            <li>Conclusão: Dezembro de 1992  </li>
                        </ul>
                    </section>
                </main>
            }
        </Container>
    )
}