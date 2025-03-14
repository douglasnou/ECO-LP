import Shield from "../../assets/Shield.png";

export const Security = () => {
    return (
        <section>
            <h2>
                <img src={Shield} />
                + SEGURANÇA
            </h2>
            <div>
                <p>
                    Um bairro com <span>monitoramento 24h</span> e câmeras em todos os pontos do bairro, você vai morar em um lugar totalmente protegido, sem abrir mão do conforto.
                    Chega de se preocupar — aqui, você e sua família estarão sempre seguros.<br/>
                    <strong>Viva com a tranquilidade que você merece!</strong>
                </p>
            </div>
        </section>
    )
}