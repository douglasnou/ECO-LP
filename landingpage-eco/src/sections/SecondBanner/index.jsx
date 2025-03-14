import Banner1 from "../../assets/SecondBanner.png";
import Banner2 from "../../assets/SecondBanner2.png";
import WhatsApp from "../../assets/whatsapp.png";

export const SecondBanner = () => {
    return (
        <section>
            <h1>
                SAIA JÁ DO ALUGUEL!
            </h1>
            <img src={Banner1}/>
            <img src={Banner2}/>
            <a>
                <img src={WhatsApp}/>
                <p>SUA CASA PRÓPRIA AQUI!</p>
            </a>
        </section>
    )
}