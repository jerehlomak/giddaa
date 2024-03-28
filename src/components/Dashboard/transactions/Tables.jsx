import React, { useState } from "react";
import { Table } from "react-bootstrap";
import moment from "moment";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ReactPaginate from "react-paginate";

import { formatPrice } from "../../../utils/constants";
import PaginatedItems from "./PaginatedItems";

const Tables = ({ payments }) => {
  const formatedDate = moment(payments.dateOfPayment).format("MMM Do YYYY");
  const [hover, setHover] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = payments.slice(firstIndex, lastIndex);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <>
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
        <tbody className="relative">
          {records.map((payment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{payment.customer.firstName}</td>
              <td>{formatPrice(payment.amount)}</td>
              <td>{payment.transactionType}</td>
              <td>{payment.house.type}</td>
              <td>{payment.mortgagePlan.name}</td>
              <td>{formatedDate}</td>
              <td className="">
                <span className="cursor-pointer">
                  <HiOutlineDotsVertical
                    color="gray"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  />
                </span>
                {/* {hover && (
                  <span className='absolute text-[0.5rem] flex flex-col right-5 uppercase top-5 bg-white shadow-sm border-[1px] border-[#f0f0f0] '>
                    <p>view receipt</p>
                    <p>download receipt</p>
                  </span>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginatedItems
        recordsPerPage={4}
        items={payments}
        lastIndex={lastIndex}
        firstIndex={firstIndex}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Tables;
