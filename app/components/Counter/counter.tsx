'use client'

/* Core */
import { useState } from 'react'

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from '@/lib/redux'
import styles from './counter.module.scss'

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount] = useState(2)

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
