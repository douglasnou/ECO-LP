import Logo from "../../assets/Logo.png";
import styled from "./style.module.scss";

export const About = () => {
    return (
        <section className={styled.About}>
            <div>
                <img src={Logo} />
            </div>

            <div>
                <article>
                    <p className={`about-text`}>
                        A Eco Casa é um produto da Eco Urbanismo com opções de 50m² e 70m².
                    </p>
                    <p className={`about-text`}>
                        As casas possuem áreas de expansão, garantindo que seu lar acompanhe seu crescimento longo do tempo.
                    </p>
                    <p className={`about-text`}>
                        Localizadas no bairro planejado do Ecoville Coroatá onde possui infraestrutura completa, áreas de lazer e segurança 24h, elas são perfeitas para a realização do seu sonho de morar em um lugar tranquilo e completo.
                    </p>
                </article>
            </div>
        </section>
    )
}