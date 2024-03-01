import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { useNavigate } from "react-router-dom";
import GlobalFilter from "./GlobalFilter";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/InvestorsTable.css";

import { FaSearch, FaTimes } from "react-icons/fa";

const InvestorsTable = () => {
  const handleLogout = () => {
    localStorage.removeItem("loginToken"); // Remove the token from local storage
    navigate("/"); // Redirect to the homepage
  };

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Here you would fetch your data from the server in a real app
    // For simplicity, we're using a static import
    const fetchData = async () => {
      fetch(`http://localhost:8000/api/investors`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setData(data))
        .catch((e) => setError(e.message))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Firm Id", accessor: "firm_id" },
      { Header: "Firm Name", accessor: "firm_name" },
      { Header: "Type", accessor: "firm_type" },
      {
        Header: "Date Added",
        accessor: "date_added",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      { Header: "Address", accessor: "address" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // Handle row click
  const handleRowClick = (firmId) => {
    navigate(`/investors/${firmId}`);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Asset Analytics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link  onClick={handleLogout} href="/">Logout</Nav.Link>
              {/* Adjust the navigation and logic as necessary */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="investors-table-container">
        <h2 className="page-heading">Fund Information</h2>
        <div className="table-header-group">
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-danger">Error: {error}</p>}

          {showSearch ? (
            <div className="search-input-container">
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
              <FaTimes
                className="close-icon"
                onClick={() => setShowSearch(false)}
              />
            </div>
          ) : (
            <FaSearch
              className="search-icon"
              onClick={() => setShowSearch(true)}
            />
          )}
        </div>

        <table {...getTableProps()} className="table table-custom">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => handleRowClick(row.original.firm_id)}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default InvestorsTable;
