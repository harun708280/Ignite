import TreeList, {
  Column,
  SearchPanel,
  Selection,
} from "devextreme-react/tree-list";
import { orientations, tabsText, stylingModes, iconPositions } from "./tabData";
import Tabs from "devextreme-react/tabs";
import "./Concentration.scss";
import Button from "../../components/ui/Button";
import SpecialButton from "../../components/ui/SpecialButton";
import {
  attachmentIcon,
  ClearIcon,
  CopyIcon,
  DeleteIcon,
  MessageIcon,
  OthersIcon,
  PIcon,
  ReloadIcon,
  ResetIcon,
  SaveIcon,
  TradeIcon,
} from "../../icons";
import { useCallback, useRef, useState } from "react";

const renderRedIfNegative = (cellData) => {
  const value = cellData.value;
  if (typeof value === "number") {
    return (
      <span style={{ color: value < 0 ? "red" : "inherit" }}>{value}</span>
    );
  }
  return <span>{value}</span>;
};

const renderRedWith3Digits = (cellData) => {
  const value = cellData.value;
  if (typeof value === "number") {
    const formatted = value.toLocaleString("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
    return (
      <span style={{ color: value < 0 ? "red" : "inherit" }}>{formatted}</span>
    );
  }
  return <span>{value}</span>;
};

const data = [
  {
    id: 1,
    parentId: 0,
    item: "Singapore Gasoline",
    quantityUOM: 150.0,
    quantityMT: 300.0,
    quantityBBL: 2423,
    price: 100.0,
    pnl: "$6.48",
    cashflow: 490.51,
    total: 328.85,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 2,
    parentId: 1,
    item: "Trades",
    quantityUOM: 300.0,
    quantityMT: 120.0,
    quantityBBL: 11491,
    price: 180.0,
    pnl: "$14.81",
    cashflow: 601.13,
    total: 446.61,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 3,
    parentId: 2,
    item: "Physical",
    quantityUOM: 180.0,
    quantityMT: 150.0,
    quantityBBL: 325659,
    price: 350.0,
    pnl: "$5.22",
    cashflow: 406.27,
    total: 351.02,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 4,
    parentId: 3,
    item: "Buy",
    quantityUOM: 100.0,
    quantityMT: 100.0,
    quantityBBL: 6485,
    price: 150.0,
    pnl: "$8.99",
    cashflow: 943.65,
    total: 948.55,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 5,
    parentId: 4,
    item: "64603",
    quantityUOM: 350.0,
    quantityMT: 450.0,
    quantityBBL: 1456,
    price: 250.0,
    pnl: "$11.70",
    cashflow: 105.55,
    total: 589.99,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 6,
    parentId: 3,
    item: "Sell",
    quantityUOM: 100.0,
    quantityMT: 100.0,
    quantityBBL: 6485,
    price: 150.0,
    pnl: "$8.99",
    cashflow: 943.65,
    total: 948.55,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 7,
    parentId: 6,
    item: "86038",
    quantityUOM: -350.0,
    quantityMT: -350.0,
    quantityBBL: -350.0,
    price: 250.0,
    pnl: "$11.70",
    cashflow: 105.55,
    total: 589.99,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 8,
    parentId: 6,
    item: "106080",
    quantityUOM: 350.0,
    quantityMT: 450.0,
    quantityBBL: 1456,
    price: 250.0,
    pnl: "$11.70",
    cashflow: 105.55,
    total: 589.99,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 9,
    parentId: 2,
    item: "Outcome Adjustment",
    quantityUOM: 180.0,
    quantityMT: 150.0,
    quantityBBL: 325659,
    price: 350.0,
    pnl: "$5.22",
    cashflow: 406.27,
    total: 351.02,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 10,
    parentId: 9,
    item: "Loss",
    quantityUOM: 100.0,
    quantityMT: 100.0,
    quantityBBL: 6485,
    price: 150.0,
    pnl: "$8.99",
    cashflow: 943.65,
    total: 948.55,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 11,
    parentId: 10,
    item: "87276",
    quantityUOM: 350.0,
    quantityMT: 450.0,
    quantityBBL: 1456,
    price: 250.0,
    pnl: "$11.70",
    cashflow: 105.55,
    total: 589.99,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 12,
    parentId: 1,
    item: "Futures",
    quantityUOM: 100.0,
    quantityMT: 100.0,
    quantityBBL: 6485,
    price: 150.0,
    pnl: "$8.99",
    cashflow: 943.65,
    total: 948.55,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 13,
    parentId: 12,
    item: "NYMEX",
    quantityUOM: -350.0,
    quantityMT: -350.0,
    quantityBBL: -350.0,
    price: 250.0,
    pnl: "$11.70",
    cashflow: 105.55,
    total: 589.99,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 14,
    parentId: 13,
    item: "Sell",
    quantityUOM: -350.0,
    quantityMT: -350.0,
    quantityBBL: -350.0,
    price: 250.0,
    pnl: "$11.70",
    cashflow: 105.55,
    total: 589.99,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
  {
    id: 15,
    parentId: 14,
    item: "724436",
    quantityUOM: 350.0,
    quantityMT: 450.0,
    quantityBBL: 1456,
    price: 250.0,
    pnl: "$11.70",
    cashflow: 105.55,
    total: 589.99,
    tradeDate: "2025-09-28",
    counterparty: "Shell",
    trader: "John Doe",
    remarks: "Initial trade",
  },
];

const tabs = [
  "Trade Details",
  "Invoice Activity",
  "Prepayments",
  "Associated Costs",
  "User-Defined",
  "Notes and Audit History",
];

const Concentration = () => {
  const [width, setWidth] = useState("auto");
  const [rtlEnabled, setRtlEnabled] = useState(false);
  const [scrollContent, setScrollContent] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const [stylingMode, setStylingMode] = useState(stylingModes[1]);
  const [iconPosition, setIconPosition] = useState(iconPositions[0]);
  const [orientation, setOrientation] = useState(orientations[0]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleSelectionChanged = (e) => {
    setSelectedRowKeys(e.selectedRowKeys);
  };

  const handleKeyDown = (e) => {
    // Copy rows (Ctrl+C)
    if ((e.ctrlKey || e.metaKey) && e.key === "c") {
      const selectedRows = data.filter((row) =>
        selectedRowKeys.includes(row.ID)
      );
      const textToCopy = selectedRows
        .map((row) => `${row.ID}\t${row.Name}\t${row.Position}`)
        .join("\n");
      navigator.clipboard.writeText(textToCopy);
      e.preventDefault();
    }

    // Paste rows (Ctrl+V)
    if ((e.ctrlKey || e.metaKey) && e.key === "v") {
      navigator.clipboard.readText().then((text) => {
        const rows = text.split("\n").map((r) => r.split("\t"));
        rows.forEach((rowData) => {
          const newRow = {
            ID: rowData[0],
            Name: rowData[1],
            Position: rowData[2],
            ParentID: 0,
          };
          data.push(newRow); // Add to your data source
        });
      });
      e.preventDefault();
    }
  };

  return (
    <div className='concentration-section'>
      <div className='button'>
        <Button icon={PIcon} name='New' />
        <Button icon={ReloadIcon} name='Reload' />
        <Button icon={ClearIcon} name='Clear' />
        <Button icon={DeleteIcon} name='Delete ' />
        <Button icon={CopyIcon} name='Copy' />
        <Button icon={attachmentIcon} name='View Attachments' />
        <Button icon={TradeIcon} name='Trade Linkage' />
        <Button icon={MessageIcon} name='Send to Messenger' />
        <Button icon={OthersIcon} name='Others' />
      </div>

      <div className='button-2'>
        <Button icon={ResetIcon} name='Reset' />
        <SpecialButton icon={SaveIcon} name='Save' iconFill='#2775FF' />
      </div>

      <div className='tabs'>
        <Tabs
          id='withText'
          width={width}
          defaultSelectedIndex={0}
          rtlEnabled={rtlEnabled}
          dataSource={tabsText}
          scrollByContent={scrollContent}
          showNavButtons={showNavigation}
          orientation={orientation}
          stylingMode={stylingMode}
          iconPosition={iconPosition}
        />
      </div>

      <div className='treelist-wrapper' onKeyDown={handleKeyDown} tabIndex={0}>
        <div className='treelist-toolbar-custom'>
          <h6 className='title'>Risk Concentration by Node</h6>
          <SearchPanel dataField='item' visible={true} />
        </div>

        <TreeList
          id='concentration'
          dataSource={data}
          keyExpr='id'
          parentIdExpr='parentId'
          showBorders={true}
          columnAutoWidth={true}
          allowColumnReordering={true}
          defaultExpandedRowKeys={[1, 2, 3, 6, 8, 9]}
          showRowLines={true}
          rowAlternationEnabled={true} // ✅ zebra striping
          hoverStateEnabled={true} // ✅ highlight on hover
          focusedRowEnabled={true}
          onSelectionChanged={handleSelectionChanged}
        >
          <SearchPanel visible={true} width={260} height={78} />
          <Column
            dataField='item'
            caption='Item Id'
            width={240}
            fixed={true}
            fixedPosition='left'
          />
          <Column
            dataField='quantityUOM'
            caption='Quantity (UOM)'
            cellRender={renderRedWith3Digits}
          />
          <Column
            dataField='quantityMT'
            caption='Quantity (MT)'
            cellRender={renderRedWith3Digits}
          />
          <Column
            dataField='quantityBBL'
            caption='Quantity (BBL)'
            cellRender={renderRedIfNegative}
          />
          <Column
            dataField='price'
            caption='Underlying Price'
            alignment='right'
            cellRender={renderRedIfNegative}
          />
          <Column dataField='pnl' caption='Profit & Loss' alignment='right' />
          <Column
            dataField='cashflow'
            caption='Cashflow'
            alignment='right'
            cellRender={renderRedIfNegative}
          />
          <Column
            dataField='total'
            caption='Total'
            alignment='right'
            cellRender={renderRedIfNegative}
          />
          <Column
            dataField='tradeDate'
            caption='Trade Date'
            dataType='date'
            width={140}
          />
          <Column dataField='counterparty' caption='Counterparty' width={180} />
          <Column dataField='trader' caption='Trader' width={140} />
          <Column dataField='remarks' caption='Remarks' width={240} />
        </TreeList>
      </div>
    </div>
  );
};

export default Concentration;
