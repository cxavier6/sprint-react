import Button from "./Button"

export default function Forms() {
    return (
        <div>
            <form className="forms">
                <label htmlFor="" >Seu nome:</label>
                <input type="text" id="nome" className="nome"/>

                <label htmlFor="">E-mail:</label>
                <input type="email" id="email" className="email"/>

                <label htmlFor="">CPF:</label>
                <input type="text" id="cpf" className="cpf"/>

                <div className="radio-button">
                    <input type="radio" id="masculino" value="masculino"/>
                    <label for="masculino">Masculino</label>
                    <input type="radio" id="feminino" value="feminino"/>
                    <label for="feminino">Feminino</label>
                </div>

                <Button text="Enviar"/>

            </form>
        </div>
    )
}