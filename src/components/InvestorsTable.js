import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { useNavigate } from 'react-router-dom';
import GlobalFilter from './GlobalFilter';
import '../styles/InvestorsTable.css';

import { FaSearch, FaTimes } from 'react-icons/fa';

const InvestorsTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);  

  useEffect(() => {
    // Here you would fetch your data from the server in a real app
    // For simplicity, we're using a static import
    const fetchData = async () => {
      const response = await import('../data/dummy.json');
      setData(response.default);
    };

    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      { Header: 'FirmId', accessor: 'firm_id' },
      { Header: 'FirmName', accessor: 'firm_name' },
      { Header: 'Type', accessor: 'firm_type' },
      { Header: 'DateAdded', accessor: 'date_added', Cell: ({ value }) => new Date(value).toLocaleDateString() },
      { Header: 'Address', accessor: 'address' },
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
    <div className="investors-table-container">
      <h2 className="page-heading">Fund Information</h2>
      <div className="table-header-group">
        {showSearch ? (
          <div className="search-input-container">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <FaTimes className="close-icon" onClick={() => setShowSearch(false)} />
          </div>
        ) : (
          <FaSearch className="search-icon" onClick={() => setShowSearch(true)} />
        )}
      </div>

      <table {...getTableProps()} className="table table-custom">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleRowClick(row.original.firm_id)}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
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
        </select>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default InvestorsTable;
