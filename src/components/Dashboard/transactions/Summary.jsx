import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { getSummary } from '../../../features/transactions/summarySlice'
import Spinner from '../../Spinner'
import { formatPrice } from '../../../utils/constants'

const Summary = () => {
  const dispatch = useDispatch()
  const { isLoading, value } = useSelector((store) => store.summary)

  useEffect(() => {
    dispatch(getSummary())
  }, [])
  if (isLoading) {
    return <Spinner />
  }
  console.log(value);
  return (
    <div className='flex flex-col mt-2 gap-4 text-sm'>
      <div className='flex flex-col gap-2'>
        <p className='font-bold'>Earnings Breakdown</p>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <Card number={formatPrice(value.expectedEarnings)} text='Expected Earnings' />
          <Card number={formatPrice(value.totalEarned)} text='Total Earned' />
          <Card number={formatPrice(value.leftToEarn)} text='Left To Earn' />
          <Card number={formatPrice(value.averageAmountEarned)} text='Average Amount Earned' />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-bold'>Frequency Breakdown</p>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <Card number={value.expectedNumberOfTransactions} text='Expected Number of Transactions' />
          <Card number={value.totalTransactions} text='Total Transactions' />
          <Card number={value.numberOfTransactionsLeft} text='Number of Transactions Left' />
          <Card number={formatPrice(value.expectedEarnings)} text='Expected Earnings' />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-bold'>Default Breakdown</p>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <Card number={value.totalMissedTransactions} text='Missed Payments' />
          <Card number={`${value.transactionDefaultRate}%`} text='Transaction Default Rate' />
          <Card number={`${24} of ${342}`} text="Customers who've missed payment" />
        </div>
      </div>
    </div>
  )
}

export default Summary