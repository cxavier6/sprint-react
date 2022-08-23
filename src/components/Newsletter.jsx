import Button from "./Button"

export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="separador">
                
                <p>─────────────────────────────── Compartilhe a novidade───────────────────────────────</p>
                
            </div>

            <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            <div className="form-newsletter">
                <div className="campos">
                    <label htmlFor="">Nome do seu amigo:</label>
                    <input type="text" />
                </div>
                
                <div className="campos">
                    <label htmlFor="">E-mail:</label>
                    <input type="email" />
                </div>
            </div>

            <Button text="Enviar agora"/>
        </div>
    )
}