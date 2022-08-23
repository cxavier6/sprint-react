function Teste() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
  
    // Nota: O array [] deps vazio significa
    // este useEffect será executado uma vez
    // semelhante ao componentDidMount()
    useEffect(() => {
      axios.get("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setProduct(result);
          },
          // Nota: é importante lidar com errros aqui
          // em vez de um bloco catch() para não receber
          // exceções de erros reais nos componentes.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {product.map(products => (
            <li key={products.id}>
              {products.name} 
              {products.price}
            </li>
          ))}
        </ul>
      );
    }
  }