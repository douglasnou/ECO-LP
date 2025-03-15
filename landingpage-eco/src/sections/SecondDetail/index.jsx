import YouTube from "react-youtube";
import styled from "./style.module.scss";
import { Autoplay } from "swiper/modules";

export const SecondDetail = () => {

    const videoId = "3U9VYUYj3ag";
    const opts = {
        height:"344",
        width: "60%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <section className={styled.Detail}>
            <h2 className="secondDetail-title">
                VEJA CADA DETALHE DA SUA NOVA CASA!
            </h2>
            <div>
                <YouTube className={styled.Video} videoId={videoId} opts={opts}/>
            </div>
        </section>
    )
}