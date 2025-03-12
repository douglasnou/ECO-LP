import { Items } from "../../Arrays/Items";
import WhatsApp from "../../assets/whatsapp.png";

export const Reasons = () => {
    return (
        <section>
            <div>
                <div>
                    <h1>
                        Por que escolher
                        a Eco Casa?
                    </h1>
                    <div></div>
                </div>

                <div>
                    <ul>
                        {
                            Items.map((Item) => (
                                <li>
                                    <img src={Item.icon} />
                                    <p>{Item.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <a>
                        <div>
                            <img src={WhatsApp}/>
                            <p>SUA CASA PRÓPRIA AQUI!</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}