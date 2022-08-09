import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import serverError from '../images/server-error.gif'
import spinner from '../images/spinner.gif'

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  //const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  },[dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return (
      <div className="heading">
        <img src={spinner} height="450px" alt="Loading..." />
      </div>
    );
  } else if (status === STATUSES.ERROR) {
    return (
      <h2 className="heading">
        <img src={serverError} height="450px" alt="Something went wrong!" />
      </h2>
    );
  }

  return (
    <>
      <div className="heading">
        <h2>Great stores. Great choices.</h2>
      </div>
      <section className="productsWrapper">

        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              className="productImage"
              src={product.image}
              alt={product.title}
            />
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to cart
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
