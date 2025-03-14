import { EcoItems } from "../../Arrays/Items"

export const EcoVille = () => {
    return (
        <section>
            <div>
                <ul>
                    {
                        EcoItems.map((item)=>(
                            <li>
                                <p>{item.text}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                CARROSSEL
            </div>
        </section>
    )
}