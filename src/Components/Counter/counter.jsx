import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
//   incrementByAmount,
//   incrementAsync,
//  selectCount,
} from '../../app/Slices/counterSlice'
import styles from './Counter.module.css'

export default function Counter() {
  const count = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()

  return (
    <div className='task'>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}