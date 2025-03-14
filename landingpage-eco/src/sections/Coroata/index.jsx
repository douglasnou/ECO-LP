import { CoroataItems } from "../../Arrays/Items";
import CoroataIcon from "../../assets/Coroata.png";

export const Coroata = () => {
    return (
        <section>
            <div>
                <img src={CoroataIcon} />
                <h2>
                    Estrutura completa no melhor bairro planejado da Região.
                </h2>
                <p>
                    As <strong>Eco Casas</strong> ficam localizadas no <span>Ecoville Coroatá</span>, um bairro planejado que oferece muito mais do que moradia: <strong>aqui você encontra segurança, lazer e qualidade de vida para toda a família!</strong>
                </p>
            </div>

            <ul>
                {
                    CoroataItems.map((item)=>(
                        <li>
                            <img src={item.img}/>
                            <p><strong>{item.strong}</strong>{item.text}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}