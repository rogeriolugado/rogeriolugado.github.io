import { Container } from './styles'
import maua from '../../assets/img/maua.svg'
import espm from '../../assets/img/ESPM.svg'
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
                    <section className='conteudo'>
                        <h2>Habilidades</h2>
                        <hr />
                        <ul>
                            <li>Vendas (Avançado)</li>
                            <li>Marketing (Avançado)</li>
                            <li>6 Sigma (Avançado)</li>
                        </ul>
                    </section>
                    <section className='conteudo'>
                        <h2>Idiomas</h2>
                        <hr />
                        <ul>
                            <li>Português (Nativo)</li>
                            <li>Inglês (Fluente)</li>
                            <li>Espanhol (Fluente)</li>
                        </ul>
                    </section>
                </div> 
                : 
                pagina === 'contato'? 
                <div id='main'>
                    <section className='conteudo'>
                        <h2>Informações Pessoais</h2>
                        <hr />
                        <ul>
                            <li>Idade: 56 anos</li>
                            <li>Residência: Santo André, SP</li>
                        </ul>
                    </section>
                    <section className='conteudo'>
                        <h2>Contato</h2>
                        <hr />
                        <ul>
                            <li>Telefone Celular: (11) 94234-9181</li>
                            <li>Email: cattleboi@hotmail.com</li>
                        </ul>
                    </section>
                </div> 
                : 
                <main id='main'>
                    <h1 className="titulo">Formação Acadêmica</h1>
                    <hr />
                    <section className="conteudo">
                        <h2>Graduação</h2>
                        <div className="posicaoimg">
                                <ul>
                                    <li>{"Engenharia Química -> Escola de Engenharia Mauá"}</li>
                                    <li>Conclusão: Dezembro de 1988 </li>
                                </ul>
                            <img src={maua} alt="logo mauá" />
                        </div>
                        
                        
                        <h2>Pós-graduação</h2>
                        <div className="posicaoimg">
                            <ul>
                                <li>Escola Superior de Propaganda e Marketing</li>
                                <li>Conclusão: Dezembro de 1992  </li>
                            </ul>
                            <img src={espm} alt="logo E S P M" />
                        </div>
                        
                    </section>
                    <h1 className="titulo">Resumo das qualificações</h1>
                    <hr />
                    <section className="conteudo">
                        <ul>
                            <li>Experiência adquirida em multinacionais como: Monsanto do Brasil, GE Plastics, Rhodia Brasil, BASF, Rio Tinto Minerals (Luzenac / Borax),  Imerys – World Minerals, IMCD, Minerals Technologies e Pixon Chemie.
                            </li>
                            <li>Profundo conhecimento do mercado de Celulose e Papel, químicos intermediários, especialidades químicas e de performance.</li>
                            <li>Habilidade em relacionamento interpessoal através de todos os níveis hierárquicos das organizações  entre várias culturas diferentes.</li>
                            <li>Ótimo construtor de times, planejador e com foco em resultados das metas estabelecidas.</li>
                        </ul>
                    </section>
                    <h1 className="titulo">Experiência Profissional</h1>
                    <hr />
                    <section className="conteudo">
                        <h3>Urbano Consultoria (Jan 2020 – atual)</h3>
                        <p>Micro Empresa própria de consultoria e representação comercial.</p>
                    </section>

                    <section className="conteudo">
                        <h3>Pixon-Chemie do Brasil (Ago 2018 – Dez 2019)</h3>
                        <h6>Cargo: Diretor Comercial</h6>
                        <p>Distribuição exclusiva da Matriz (Inglaterra) de especialidades químicas - derivados de Fósforo (P4) e de Silício (Si) com fábricas localizadas na China.</p>
                        <h4>Principais responsabilidades:</h4>
                        <ul>
                            <li>Elaboração de plano de vendas lidando diretamente com  Matriz em UK e fábricas da China.</li>
                            <li>Coordenação de equipe de vendas para atingimento de metas de faturamento e rentabilidade.</li>
                        </ul>
                    </section>

                    <section className="conteudo">
                        <h3>Minerals Techologies (Mai 2015 – Fev 2018)</h3>
                        <h6>Cargo: Diretor de Marketing e Vendas</h6>
                        <p>Indústria norte-americana de minerais industriais de performance com faturamento de US$ 2B (América do Sul = US$40M).</p>
                        <h4>Principais responsabilidades:</h4>
                        <ul>
                            <li>Trabalhar com a Matriz em NY para elaborar, coordenar e atingir as metas de faturamento e rentabilidade.</li>
                            <li>Administrar e renegociar contratos de fornecimento de longo prazos</li>
                            <li>Buscar crescimento geográfico para o negócio de papel na América do Sul.</li>
                        </ul>
                    </section>

                    <section className="conteudo">
                        <h3>IMCD Distribuidora (Jul 2014 – Mai 2015)</h3>
                        <h6>Cargo: Diretor de Vendas Brasil</h6>
                        <p>Distribuidora Holandesa de Produtos Químicos com faturamento de US$ 100M e 150 funcionários</p>
                        <h4>Principais responsabilidades:</h4>
                        <ul>
                            <li>Elaborar juntamente com a presidência as metas de vendas e de rentabilidade para os 5 mercados atendidos.</li>
                            <li>Administrar os 5 Gerentes Comerciais responsáveis por cada negócio e determinar metas de faturamento e rentabilidade.</li>
                        </ul>
                    </section>

                    <section className="conteudo">
                        <h3>Rio Tinto Brasil (Borax South America) – (Ago 2003 – Jun 2011)</h3>
                        <h6>Cargo: Diretor Comercial de Talco e Boratos</h6>
                        <p>Empresa Inglesa / Australiana Fabricante de Minerais Industriais com faturamento de US$ 52B (US$ 100M na América do Sul) e 200 funcionários.</p>
                        <h4>Principais responsabilidades:</h4>
                        <ul>
                            <li>Elaborar juntamente coma Matriz nos USA as metas de vendas e de rentabilidade para os mercados de talco (P&P, plásticos, tintas e outros) e Boratos para a Indústria e Agricultura.</li>
                            <li>Gerenciar 2 Gerentes de Contas – um para a Indústria Geral e outro para a Agricultura.</li>
                        </ul>
                    </section>
                    <h2>Empresas Anteriores: BASF, Rhodia, GE Plastics e Monsanto do Brasil.</h2>

                </main>
            }
        </Container>
    )
}