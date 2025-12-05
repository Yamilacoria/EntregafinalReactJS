import {useState, useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../services/products';
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getProductsById(id)
    .then((data) => setDetail(data))
    .catch((err) => {
      console.log(err)
    });
  },[id]);
  
  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ):(
        <p>Cargando...</p>
      )}
    </main>
  );
};