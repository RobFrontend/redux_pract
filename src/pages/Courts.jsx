import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, toggleShow } from '../features/counterSlice';

export default function Courts() {
    const count = useSelector(state => state.counter.value);
    const toggle = useSelector(state => state.counter.isShow)
    const dispatch = useDispatch()
  return (
    <div>
          <button onClick={()=> dispatch(toggleShow())}>Toggle counting</button>
          <h1>Courts Page</h1>
          {toggle &&        
          <>
             <button onClick={()=> dispatch(increment())}>+</button>
             <p>Value: {count}</p>
             <button onClick={()=> dispatch(decrement())}>-</button>
          </>}
    </div>
  )
}
