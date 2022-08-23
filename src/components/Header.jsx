import Button from "./Button"

export default function Header() {
    return ( 
    <div className="container-header">
        <div className="header">
            <p className="header-title">uma seleção de produtos</p>
            <h2>especial para você</h2>
            <p className="header-info">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
            <div className="header-button">
                <Button text="Conheça a Linx"/>
                <Button text="Ajude o algoritmo"/>
                <Button text="Seus produtos"/>
                <Button text="Compartilhe"/>
            </div>
        </div>
    </div>
    )
}