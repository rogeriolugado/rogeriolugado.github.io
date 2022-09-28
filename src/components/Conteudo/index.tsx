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
                    <h1 id="titulo">{"Habilidades & Idiomas"}</h1>
                    
                </div> 
                : 
                pagina === 'contato'? 
                <div id='main'>
                    <h1 id="titulo">Contato</h1>
                    <p className="conteudo">Tel: (11) 9xxxx-xxxx</p>
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