import React from 'react'
import { Data } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { type } from '@testing-library/user-event/dist/type';
function Poducts() {
    const cart = useSelector((store) => store);
    const dispatch = useDispatch();
   // console.log(cart)
    return (
        <div className='products'>
            {
                Data.map((poduct) =>
                    <div className='product' key={poduct.id}>
                        <img src={poduct.image} />
                        <div className='poduct-detail'>
                            <span onClick={()=>dispatch({type:"Add" , payload:poduct })}>افزودن به سبد خرید</span>
                            <div className='poduct-price'>
                                <h6>{poduct.price}</h6>
                                <h5>{poduct.title}</h5>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Poducts