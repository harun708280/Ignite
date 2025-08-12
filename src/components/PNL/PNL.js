import React from "react";
import { DataGrid, Column } from "devextreme-react/data-grid";
import { SelectBox } from "devextreme-react/select-box";
import { TextBox } from "devextreme-react/text-box";
import filterIcon from "../../assets/images/icons/edit-2.svg";
import searchIcon from "../../assets/images/icons/search-normal.svg";
import rightIcon from "../../assets/images/icons/arrow-right.svg";

import "./pnlsection.scss";
import { Button } from "devextreme-react";

const data = [
  {
    strategy: "Trigger Performance",
    quantity: -55800.5,
    cashflow: -4564212.9,
    pnl: -115809.6,
  },
  {
    strategy: "Acid Position",
    quantity: -55800.5,
    cashflow: -4564212.9,
    pnl: -115809.6,
  },
  {
    strategy: "Product Distribution",
    quantity: -55800.5,
    cashflow: -4564212.9,
    pnl: -115809.6,
  },
  {
    strategy: "Product Integration",
    quantity: -55800.5,
    cashflow: -4564212.9,
    pnl: -115809.6,
  },
  {
    strategy: "Trigger Performance",
    quantity: -55800.5,
    cashflow: -4564212.9,
    pnl: -115809.6,
  },
  {
    strategy: "Trigger Performance",
    quantity: -55800.5,
    cashflow: -4564212.9,
    pnl: -115809.6,
  },
  {
    strategy: "African Fertilisers",
    quantity: -55800.5,
    cashflow: -4564212.9,
    pnl: -115809.6,
  },
  {
    strategy: "Trigger Performance",
    quantity: -55800.5,
    cashflow: -4564212.9,
    pnl: -115809.6,
  },
];

const filterOptions = ["Sort by view", "Sort by price", "Sort by ratings"];

const PNLSection = () => {
  return (
    <div className='pnl-section'>
      <div className='chart-header'>
        <h3>PNL Aggregated</h3>
        <div class='chart-icons'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='12'
              viewBox='0 0 14 12'
              fill='none'
            >
              <path
                d='M1.75 7.625V8.9375C1.75 9.2856 1.88828 9.61944 2.13442 9.86558C2.38056 10.1117 2.7144 10.25 3.0625 10.25H10.9375C11.2856 10.25 11.6194 10.1117 11.8656 9.86558C12.1117 9.61944 12.25 9.2856 12.25 8.9375V7.625M9.625 5L7 7.625M7 7.625L4.375 5M7 7.625V1'
                stroke='#C0C4CF'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
            >
              <path
                d='M8.48758 12.6408C10.9901 11.9817 12.8334 9.70667 12.8334 7C12.8334 3.78001 10.2434 1.16667 7.00008 1.16667C3.10925 1.16667 1.16675 4.41 1.16675 4.41M1.16675 4.41V1.75001M1.16675 4.41H2.33925H3.75675'
                stroke='#C0C4CF'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M1.16675 7C1.16675 10.22 3.78008 12.8333 7.00008 12.8333'
                stroke='#C0C4CF'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-dasharray='3 3'
              ></path>
            </svg>
          </span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
            >
              <path
                d='M1.75 5.31417V8.68C1.75 9.91667 1.75 9.91667 2.91667 10.7042L6.125 12.5592C6.60917 12.8392 7.39667 12.8392 7.875 12.5592L11.0833 10.7042C12.25 9.91667 12.25 9.91667 12.25 8.68584V5.31417C12.25 4.08333 12.25 4.08333 11.0833 3.29583L7.875 1.44083C7.39667 1.16083 6.60917 1.16083 6.125 1.44083L2.91667 3.29583C1.75 4.08333 1.75 4.08333 1.75 5.31417Z'
                stroke='#C0C4CF'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z'
                stroke='#C0C4CF'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </span>
        </div>
      </div>

      <div className='filter-controls'>
        <div className='search'>
          <TextBox placeholder='Search...' className='search-box' />
          <img src={searchIcon} alt='' />
        </div>

        <SelectBox
          items={filterOptions}
          placeholder='Filter'
          showClearButton={true}
        />
      </div>

      <DataGrid
        dataSource={data}
        columnAutoWidth={true}
        showBorders={true}
        className='pnl-table'
      >
        <Column dataField='strategy' caption='Strategy' />
        <Column
          dataField='quantity'
          caption='Equivalent Quantity'
          alignment='center'
          cellRender={({ data }) => (
            <span className={data.quantity > 0 ? "text-green" : "text-red"}>
              {data.quantity.toLocaleString()}
            </span>
          )}
        />
        <Column
          dataField='cashflow'
          caption='Cashflow'
          alignment='center'
          cellRender={({ data }) => (
            <span className={data.cashflow > 0 ? "text-green" : "text-red"}>
              {data.cashflow.toLocaleString()}
            </span>
          )}
        />
        <Column
          dataField='pnl'
          caption='PNL'
          alignment='center'
          cellRender={({ data }) => (
            <span className={data.pnl > 0 ? "text-green" : "text-red"}>
              {data.pnl.toLocaleString()}
            </span>
          )}
        />
      </DataGrid>

      <div class='filter-bar'>
        <div class='filter-btns-container'>
          <button class='nav-icon-btn left'>
            <img src={rightIcon} alt='' />
          </button>
          <div class='filter-btns'>
            <button class='filter-btn'>Category</button>
            <button class='filter-btn'>Cost</button>
            <button class='filter-btn'>Futures</button>
            <button class='filter-btn'>Options</button>
            <button class='filter-btn'>Swap</button>
            <button class='filter-btn'>Trades</button>
          </div>
          <button class='nav-icon-btn right'>
            <img src={rightIcon} alt='' />
          </button>
        </div>
        <button class='edit-filter-btn'>
          <img src={filterIcon} alt='' /> Edit Filter
        </button>
      </div>
    </div>
  );
};

export default PNLSection;
