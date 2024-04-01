import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineHelpOutline } from "react-icons/md";

import { Sidebar } from "../components/Dashboard/transactions";

const DashboardPage = () => {
  return (
    <div className="relative flex pb-16">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full md:ml-64  flex flex-col p-8 relative overflow-y-auto">
        <div className="flex justify-between items-center">
          <h1 className="max-w-[200px] md:max-w-full font-[900] text-[2rem] text-black">
            Transactions & Earnings
          </h1>
          <span className="relative bg-[#335F32] flex items-center justify-center h-12 w-12 rounded-full">
            <FaRegBell color="white" size={24} />
            <p className="absolute flex justify-center font-bold top-1 right-2 text-xs text-[#335F32] bg-white h-4 w-4 rounded-full">
              2
            </p>
          </span>
        </div>

        <p className="text-sm">
          View all your transactions and how much you earned from customer
        </p>
        <div className="flex items-center gap-4 py-2 text-xs font-[600] overflow-x-auto no-underline">
          <NavLink
            style={({ isActive }) => {
              return {};
            }}
            to="/developer/transaction/get-summary"
            className={({ isActive}) =>
              [
                isActive ? "links links-active" : "links",
              ].join("")
            }
          >
            SUMMARY
          </NavLink>
          <Link
            to="/developer/transaction/get-succesful-payments"
            className="links"
          >
            SUCCESSFUL TRANSACTIONS
          </Link>
          <Link
            to="/developer/transaction/get-expected-payments"
            className="links"
          >
            EXPECTED TRANSACTIONS
          </Link>
          <Link
            to="/developer/transaction/get-missed-payments"
            className="links"
          >
            DEFAULTS
          </Link>
          <Link className="links">ANALYTICS</Link>
          <Link className="links">FORECAST</Link>
        </div>
        <hr />
        <Outlet />
      </div>
      <span className="bottom-10 right-10 absolute px-2 py-2 border-[1px] flex items-center gap-2 justify-center rounded-full border-[#f0f0f0] hover:bg-[#335F32] hover:text-white duration-300 transition-all cursor-pointer">
        <MdOutlineHelpOutline size={20} />
        <span className="text-[0.7rem] ">HELP & SUPPORT </span>
      </span>
    </div>
  );
};

export default DashboardPage;
