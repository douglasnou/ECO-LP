import Banner1 from "../../assets/SecondBanner.png";
import Banner2 from "../../assets/SecondBanner2.png";
import WhatsApp from "../../assets/whatsapp.png";
import styled from "./style.module.scss";

export const SecondBanner = () => {
    return (
        <section className={styled.Banner}>
            <h1 className="secondBanner-title">
                SAIA JÁ DO ALUGUEL!
            </h1>
            <img src={Banner1} />
            <img src={Banner2} />
            <a target="blank" href="https://wa.me/5599991971477?text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+Eco+Casa+Coroat%C3%A1%21%F0%9F%8F%A0%E2%9C%A8"
            >
                <div>
                    <img src={WhatsApp} />
                    <p className="secondBanner-btn">SUA CASA PRÓPRIA AQUI!</p>
                </div>
            </a>
        </section>
    )
}