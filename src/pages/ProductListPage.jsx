import { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css'


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);


  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      setProducts(response.data)
      console.log(response);
      setFetching (false)
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    })
    }, [] );  //  <-- [] Means the effect will run only once, when the component mounts

    return (
      <div >
        {fetching && <p>Loading ...</p>}
        {products.map((pro) => {
          return (
            <Link key={pro.id} to={`/product/details/${pro.id}`}>
            <div  className="card">
              <img src={pro.image} alt="product" />
              <h3> {pro.title}</h3>
              <p>{pro.category}</p>
              <p> {pro.price}$</p>
              <p> {pro.description}</p>
            </div>
            </Link>
          )
        })}
      </div>
    );
  }


export default ProductListPage;