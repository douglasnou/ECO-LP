import { EcoCasaSmall } from "../../Arrays/EcoCasa"

export const EcoCasaOne = () => {
    return (
        <section>
            <div>
                <h1>
                    Eco Casa 50m²
                </h1>
                <div>
                    <ul>
                        {
                            EcoCasaSmall.map((eco)=>(
                                <li>
                                    <img src={eco.icon}/>
                                    <p>{eco.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}