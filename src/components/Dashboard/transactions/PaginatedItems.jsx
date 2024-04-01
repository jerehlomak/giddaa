import ReactPaginate from "react-paginate";
import { useState } from "react";

const PaginatedItems = ({ recordsPerPage, items, currentPage, setCurrentPage }) => {
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage  

  const page  = Math.ceil(items.length / recordsPerPage)
  const numbers = [...Array(page + 1).keys()].slice(1)
  const prevPage = () => {
    if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
    }
  }
  const nextPage = () => {
    if (currentPage !== page) {
        setCurrentPage(currentPage + 1)
    }
  }
  const changePage = (id) => {
    setCurrentPage(id)
  }
    return (
      <>
        <nav>
            <ul className="flex items-center divide-x-[1px]">
                <li className="bg-[#335F32] text-white p-2 text-[1rem] rounded-l-md">
                    <a href="#" className="page-link"
                        onClick={prevPage}
                    >Prev</a>
                </li>
                {
                    numbers.map((n, i) => (
                        <li onClick={() => changePage(n)} className={`bg-[#335F32] p-2 text-[1rem] ${currentPage === n ? 'text-[#335F32] bg-white' : 'text-white'}`} key={i}>
                            <a href="#" className="page-link"
                          >
                                {n}
                            </a>
                        </li>
                    ))
                }
                <li className="bg-[#335F32] text-white p-2 text-[1rem] rounded-r-md">
                    <a href="#" className="page-link"
                        onClick={nextPage}
                    >Next</a>
                </li>
            </ul>
        </nav>
      </>
    );
  }

export default PaginatedItems