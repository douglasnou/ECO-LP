import MaranhaoImg from "../../assets/Maranhao.png";
import Ecoville from "../../assets/Ecovilles.png";

export const Maranhao = () => {
    return (
        <section>
            <div>
                <img src={MaranhaoImg} />
            </div>

            <div>
                <h2>Eco Urbanismo</h2>
                <p>
                    Empresa genuinamente maranhense, é a responsável pela idealização, planejamento e construção dos Ecovilles em 9 cidades ao longo do Maranhão. Temos no nosso DNA o compromisso e qualidade na entrega bairros planejados com a infraestrutura necessária pra manter sua qualidade de vida de acordo com o que você merece.
                </p>
                <img src={Ecoville} />
            </div>
        </section>
    )
}