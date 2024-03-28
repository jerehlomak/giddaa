import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";

import { getMissedTransaction } from "../../../features/transactions/defaultSlice";
import Spinner from "../../Spinner";
import Card from "./Card";
import { formatPrice } from "../../../utils/constants";

const Defaults = () => {
  const dispatch = useDispatch();
  const { isLaoding, value } = useSelector((store) => store.defaults);

  useEffect(() => {
    dispatch(getMissedTransaction());
  }, []);

  if (isLaoding) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col mt-2 gap-4 text-sm">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card number={formatPrice(11200000)} text="Expected Earnings" />
        <Card number={formatPrice(11200000)} text="Total Default Amount" />
        <Card number={34} text="Missed Payments" />
        <Card number={43} text="Customers who've missed payments" />
      </div>
      <span className="w-full flex justify-between items-center">
        <p className="max-w-[400px]">
          Data on payments that should have been made but weren't and the
          customers who should have paid
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
    </div>
  );
};

export default Defaults;
