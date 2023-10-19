import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import axios from "axios";
import { getItems } from "../utils/hook";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      // const response = await axios.get(
      //   "https://fakestoreapiserver.reactbd.com/products"
      // );
      // setProducts(response.data);

      const data = await getItems();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='mt-[80px]'>
      <Banner />
      <Products products={products} loading={loading} />
    </div>
  );
};

export default Home;
