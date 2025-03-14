import Logo from "../../assets/Logo.png";
import Logo100 from "../../assets/Logo100.png";
import WhatsApp from "../../assets/whatsapp-big.png";
import styled from "./style.module.scss";

export const KnowMore = () => {
    return (
        <section className={styled.KnowMore}>
            <div className={styled.Head}>
                <h1 className="knowmore-title">CASAS QUE JÁ ENTREGAMOS!</h1>
            </div>

            <div className={styled.Container}>
                <div className={styled.Videos}>
                    Videos
                </div>
                <div className={styled.Logos}>
                    <img src={Logo} />
                    <img src={Logo100} />
                </div>
                <a target="blank" href="https://wa.me/5599991971477?text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+Eco+Casa+Coroat%C3%A1%21%F0%9F%8F%A0%E2%9C%A8"
                >
                    <div>
                        <img src={WhatsApp} />
                        <p className="knowmore-btn">SAIBA MAIS <span>AQUI</span></p>
                    </div>
                </a>
            </div>
        </section>
    )
}