import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../App.css'


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
      console.log(response);
     
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    })
    }, [productId] ); 



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="card">
        <>
         <img src={product.image} alt="product" />
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.price}$</p>
          <p>{product.description}</p>
        </>
    </div>
  );
}

export default ProductDetailsPage;
