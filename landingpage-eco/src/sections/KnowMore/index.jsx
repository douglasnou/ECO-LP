import Logo from "../../assets/Logo.png";
import Logo100 from "../../assets/Logo100.png";
import WhatsApp from "../../assets/whatsapp-big.png";
import styled from "./style.module.scss";

export const KnowMore = () => {
    const videoId = ["1Dpz6HT__vyGFzYV6vtK_acXVwAb1XIpC", "1QwvyMF7ht66Pg1xTFkDgPKovE2GczmvL", "1l-OouYZE59x-dWoX-dTtjtslXs5blA9Q"];
    const videoLinkOne = `https://drive.google.com/file/d/${videoId[0]}/preview`;
    const videoLinkTwo = `https://drive.google.com/file/d/${videoId[1]}/preview`;
    const videoLinkThree = `https://drive.google.com/file/d/${videoId[2]}/preview`;


    return (
        <section className={styled.KnowMore}>
            <div className={styled.Head}>
                <h1 className="knowmore-title">CASAS QUE JÁ ENTREGAMOS!</h1>
            </div>

            <div className={styled.Container}>
                <div className={styled.Videos}>
                    <iframe
                    src={videoLinkOne}
                    width={170}
                    height={300}
                    allow="autoplay"
                    title="Casas entregues"
                    ></iframe>

                    <iframe
                    src={videoLinkTwo}
                    width={170}
                    height={300}
                    allow="autoplay"
                    title="Casas entregues"></iframe>

<iframe
                    src={videoLinkThree}
                    width={170}
                    height={300}
                    allow="autoplay"
                    title="Casas entregues"></iframe>
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