import React, { useEffect } from 'react'
import Card from './Card'
import Tables from './Tables'

import { useDispatch, useSelector } from 'react-redux'
import { getSuccessPayments } from '../../../features/transactions/getSuccessSlice'

import Spinner from '../../Spinner'

const SuccessfulTransactions = () => {
  const dispatch = useDispatch()
  const { isLoading, payments } = useSelector((store) => store.payments)
  
  useEffect(() => {
    dispatch(getSuccessPayments())
  }, [])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className='flex flex-col mt-4 gap-8 text-xs'>
      <Card number={payments.length} text='Successful Transactions' sm='max-w-[450px]' />
      <div className='flex flex-col gap-4'>
        <span className='w-full flex justify-between items-center'>
          <p className='max-w-[400px]'>Successful transactions made by customers in your organisation</p>
          <p>Show all Fields</p>
        </span>
        <Tables payments={payments} />
      </div>
    </div>
  )
}

export default SuccessfulTransactions