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
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link"
                        onClick={prevPage}
                    >Prev</a>
                </li>
                {
                    numbers.map((n, i) => (
                        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                            <a href="#" className="page-link"
                            onClick={() => changePage(n)}>
                                {n}
                            </a>
                        </li>
                    ))
                }
                <li className="page-item">
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