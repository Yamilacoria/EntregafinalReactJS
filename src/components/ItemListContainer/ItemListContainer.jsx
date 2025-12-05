import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { getProducts } from "../../services/products";

export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([])
  const {category} = useParams()
  
  useEffect(() => {
     getProducts(category)
    .then((data) => setProducts(data))
    .catch((err) => {
      console.log(err)
    });

  }, [category])

  return (
    <section >
      <h2>{titulo}<span className="text-category">{category}</span></h2>
      <ItemList lista={products}/>
    </section>
  )
}