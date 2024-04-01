import React, { useState } from "react";
import { Table } from "react-bootstrap";
import moment from "moment";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ReactPaginate from "react-paginate";

import { formatPrice } from "../../../utils/constants";
import PaginatedItems from "./PaginatedItems";

const Tables = ({ payments }) => {
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
              <td>{moment(payment.dateOfPayment).format("MMM Do YYYY")}</td>
              <td className="relative">
                <span className="cursor-pointer block">
                  <HiOutlineDotsVertical color="gray" 
                  />
                </span>
              
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
