import {Link} from 'react-router'

function Home(){
    return(
        <>
            <nav class="py-2 px-4 flex itens-center shadow-lg fixed w-full bg-secondary top-0">
                <a href="#about" class="py-2 px-2 hover:bg-primary">Sobre</a>
                <a href="#prices" class="py-2 px-2 hover:bg-primary">Preços</a>
                <a href="#features" class="py-2 px-2 hover:bg-primary">Benefícios</a>
                <Link class="py-2 px-4 bg-primary text-white rounded-full ml-auto mr-5 shadow hover:shadow-inner" to="/auth">Acessar</Link>
            </nav>
            <div>
                <div id="about">
                    <div class="max-w-lg mx-auto py-4">
                        <h1 class="text-center">Sobre o projeto</h1>
                        <div class="flex gap-8">
                            <div>
                                <h3>Um pouco mais sobre o Fale+</h3>
                                <p>
                                    O projeto tem como objetivo ajudar pesssoas com dificuldade de falar em público, seja na questão de ansiedade, fobia social, medo ou nervosismo.
                                    Dentro do projeto estamos idealizando uma IA para ajudar no desenvolvimento da fala, controle de ansiedade e exercicíos práticos para ambas as situações.
                                </p>
                            </div>
                            <div>
                                <h3>Sobre nossas expectativas</h3>
                                <p>
                                    Esperamos que esse projeto possa alcançar o público que tem essas dificuldades e queira ter um desenvolvimento pessoal.
                                    Também temos a idéia de implementar em escolas de ensino fundamental para ajudar o desenolvimento desde cedo, como se fosse uma matéria de "locução".
                                </p>     
                            </div>               
                        </div>
                    </div>
                </div>
                <div id="prices">
                    <div class="max-w-lg mx-auto py-4">
                        <h1 class="text-center">Preços</h1>
                        <p>
                            Sobre a questão dos preços, ainda não esta decidido se terá algum custo para o uso do app, inicialmente estavámos pensando sobre um plano mensal de valor entre <b>150 a 300 reais.</b>
                            Mas como também sabemos que pessoas de baixa renda possam querer usar o aplicativo, ficaria meio que inacessível esses preços, então pensando nisso, seria interessante uma comprovação de renda para preços "promocionais" para as pessoas que se enquadram.
                        </p>
                    </div>
                </div>
                <div id="features">
                    <div class="max-w-lg max-w-lg mx-auto py-4">
                        <h1 class="text-center">Benefícios</h1>
                        <p>
                            Sobre os benefícios, imaginamos que com o uso do aplicativo, tanto pessoas introvertidas e tímidas, quanto pessoas com dificuldade mesmo de falar em público seriam desenvolvidas de forma natural a apriomar suas habilidades de fala e socialização.
                            Hoje em dia, está cada vez mais comum pessoas com a mesma dificuldade, e nossa proposta é ajudar essas pessoas a evoluirem e se sentirem seguras de falar em uma reunião para seu trabalho, ou em uma apresentação na escola ou faculdade.
                            Esperamos que o app possa ajudar a todas as pessoas que sofrem dessa mesma dificuldade.
                        </p>
                    </div>
                </div>
            </div>
            <footer>
                <div class="max-w-lg max-w-lg mx-auto py-4 text-center">
                    <p>
                        Feito por Kauã Matheus de Souza
                    </p>
                </div>
            </footer>
        </>
    );
}
export default Home;