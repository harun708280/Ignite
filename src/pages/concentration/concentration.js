import TreeList, {
  Column,
  SearchPanel,
  Editing,
} from "devextreme-react/tree-list";
import FilterBuilder from "devextreme-react/filter-builder";
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
import { data } from "./data";

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

// ✅ filter fields for FilterBuilder
const fields = [
  { dataField: "item", dataType: "string" },
  { dataField: "quantityUOM", dataType: "number" },
  { dataField: "quantityMT", dataType: "number" },
  { dataField: "quantityBBL", dataType: "number" },
  { dataField: "price", dataType: "number" },
  { dataField: "pnl", dataType: "string" },
  { dataField: "cashflow", dataType: "number" },
  { dataField: "total", dataType: "number" },
  { dataField: "tradeDate", dataType: "date" },
  { dataField: "counterparty", dataType: "string" },
  { dataField: "trader", dataType: "string" },
  { dataField: "remarks", dataType: "string" },
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
  const [filter, setFilter] = useState(null); // ✅ state for filter

  const handleSelectionChanged = (e) => {
    setSelectedRowKeys(e.selectedRowKeys);
  };

  const handleKeyDown = (e) => {
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
          data.push(newRow);
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
        {/* ✅ FILTER BUILDER SECTION */}
        <div className='filter-builder-wrapper'>
          <h6>Advanced Filter</h6>
          <FilterBuilder
            fields={fields}
            value={filter}
            onValueChanged={(e) => setFilter(e.value)}
          />
        </div>
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
          rowAlternationEnabled={true}
          hoverStateEnabled={true}
          focusedRowEnabled={true}
          onSelectionChanged={handleSelectionChanged}
          filterValue={filter} // ✅ apply filter here
          allowColumnResizing={true}
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
          {/* <Editing
            mode='popup'
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
          /> */}
        </TreeList>
      </div>
    </div>
  );
};

export default Concentration;
