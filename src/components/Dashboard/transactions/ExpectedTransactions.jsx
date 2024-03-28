import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

import { getExpectedTransaction } from '../../../features/transactions/expectedTransactionSlice'
import Spinner from '../../Spinner'
import Card from './Card'


const ExpectedTransactions = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.expected)

  useEffect(() => {
    dispatch(getExpectedTransaction())
  }, [])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className='flex flex-col mt-4 gap-8 text-xs'>
      <Card number={234} text='Expected Transactions' sm='max-w-[450px]' />
      <div className='flex flex-col gap-4'>
        <span className='flex justify-between items-center'>
          <p>
            Expected transactions involve payments awaiting the payment due date, anticipated to be fulfilled by <br /> customers, and primarily representing future repayments.
          </p>
          <p>Show all Fields</p>
        </span>
        <Table hover className="table border-1 text-sm" responsive size="">
          <thead className="bg-gray-300 uppercase">
            <tr className="">
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Property</th>
              <th>Plan</th>
              <th>Payment Date</th>
              <th></th>
            </tr>
          </thead>
        </Table>
        {/* <Tables payments={payments} /> */}
      </div>
    </div>
  )
}

export default ExpectedTransactions