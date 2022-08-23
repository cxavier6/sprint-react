export default function Product({ product, name, image, description }) {
  return (
    <div className="container-product">
        <div className="separador">
                
                <p>─────────────────────────────── Sua seleção especial ───────────────────────────────</p>
                
            </div>
        {product.map(p => (
            <div key={p}>{p}</div>
        ))}
    </div>
  )
}
