import React from 'react'
import logo from '../logo.svg'
import { useDispatch, useSelector } from 'react-redux'
const Card=()=> {
  const cart = useSelector((store) => store?.product);
  const dispatch = useDispatch();
  console.log(cart)

  const getTotal = cart.reduce((total, item ) => total + (item.quantity * item.price),0); 
  return (
    <div className='cards'>
      {
        cart.map((item) =>
          <div className='card' key={item.id}>
            <img src={item.image} />
            <div className='card-detail'>
              <span className='card-title'>{item.title}</span>
              <span className='card-price'>{item.price} </span>
              <span className='card-total-price'>{item.price * item.quantity} </span>
              <button onClick={() => dispatch({ type: "Remove", payload: item })} className='card-total-price'>حذف محصول </button>
              <div className='change-card-count'>
                <button onClick={() => dispatch({ type: "Increase", payload: item })} className='increase-count'>+</button>
                <span>تعداد {item.quantity}</span>
                <button onClick={() => {
                  if (item.quantity > 1) dispatch({ type: "Decrease", payload: item })
                  else dispatch({ type: "Remove", payload: item })
                }} className='decrease-count'>-</button>
              </div>
            </div>
          </div>
        )
      }
      <div className='total'>
        <p>         
          {getTotal}
        </p>
      </div>
    </div>
  )
}

export default Card