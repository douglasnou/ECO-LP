import Logo from "../../assets/Logo.png";
import Background from "../../assets/backAbout.png";

export const About = () => {
    return (
        <section style={{backgroundImage: `url(${Background})`,backgroundSize: "cover", display: "flex", height: "331px"}}>
            <div>
                <img src={Logo} />
            </div>

            <div>
                <article>
                    <p>
                        A Eco Casa é um produto da Eco Urbanismo com opções de 50m² e 70m².
                        As casas possuem áreas de expansão, garantindo que seu lar acompanhe seu crescimento longo do tempo.
                        Localizadas no bairro planejado do Ecoville Coroatá onde possui infraestrutura completa, áreas de lazer e segurança 24h, elas são perfeitas para a realização do seu sonho de morar em um lugar tranquilo e completo.
                    </p>
                </article>
            </div>
        </section>
    )
}