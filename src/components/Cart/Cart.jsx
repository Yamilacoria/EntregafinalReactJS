import { useCartContext } from '../../context/CartContext/useCartContext'
import { Link } from 'react-router-dom'
import { Item } from '../Item/Item'
import './Cart.css'

export const Cart = () => {
  const {cart, clearCart, deleteItem, total, checkout} = useCartContext()
  return (
    <section>
      <h2>Carrito de compras</h2>
    <div className='carrito-container'>
      {cart.length ? (cart.map((prod) => (
        <Item key={prod.id} {...prod}>
          <p>Cantidad: {prod.quantity}</p>
          <button className='btn' onClick={() =>deleteItem(prod.id)}>
            Eliminar
          </button>
        </Item>)) 
        ):( <p className='msg-cart-vacio'>Tu carrito está vacio </p>)
      }
    </div>
    {cart.length ? (
      <div className='btn-container'>
        <div className='total-pagar'>
          <p>Total a pagar: ${total().toLocaleString('es-AR')}</p>
        </div>
        <button className='btn' onClick={checkout}>
          Finalizar compra
        </button>
        <button className='btn' onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
      ):(
      <Link className='btn btn-volver' to="/">
        Volver al inicio
      </Link>
      )}
    </section>
  )
}