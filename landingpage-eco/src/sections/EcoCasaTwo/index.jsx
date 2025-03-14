import { EcoCasaBig } from "../../Arrays/EcoCasa"

export const EcoCasaTwo = () => {
    return (
        <section>
            <div>
                <h1>
                    Eco Casa 70m²
                </h1>
                <div>
                    <ul>
                        {
                            EcoCasaBig.map((eco)=>(
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