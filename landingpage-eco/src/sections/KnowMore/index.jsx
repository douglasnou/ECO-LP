import Logo from "../../assets/Logo.png";
import Logo100 from "../../assets/Logo100.png";
import WhatsApp from "../../assets/whatsapp.png";

export const KnowMore = () => {
    return (
        <section>
            <div>
                <h1>CASAS QUE JÁ ENTREGAMOS!</h1>
            </div>

            <div>
                <div>
                    Videos
                </div>
                <div>
                    <img src={Logo} />
                    <img src={Logo100} />
                </div>
                <a>
                    <div>
                        <img src={WhatsApp} />
                        <p>SAIBA MAIS <span>AQUI</span></p>
                    </div>
                </a>
            </div>
        </section>
    )
}