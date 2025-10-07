import TreeList, { Column, SearchPanel } from "devextreme-react/tree-list";
import FilterBuilder from "devextreme-react/filter-builder";
import { ReactComponent as ArrowD } from "../../assets/images/icons/arreowD.svg";
import { ReactComponent as ArrowU } from "../../assets/images/icons/arrowU.svg";
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
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // toggle icons
import { data } from "./data";
import { CheckBox, SelectBox, Switch } from "devextreme-react";

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

// ✅ Extended filter fields
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

  // Business-specific filters
  { dataField: "tradeDesk", dataType: "string" },
  { dataField: "book", dataType: "string" },
  { dataField: "strategy", dataType: "string" },
  { dataField: "instrumentType", dataType: "string" },
  { dataField: "region", dataType: "string" },
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
  const [filter, setFilter] = useState(null); // ✅ filter state
  const [showFilter, setShowFilter] = useState(true); // ✅ toggle filter panel
  const [switchValue, setSwitchValue] = useState(false);

  const [strategy, setStrategy] = useState(null);
  const [tradeType, setTradeType] = useState("Futures");
  const strategyValue = ["Strategy 1", "Strategy 2", "Strategy 3"];

  const tradeData = ["Trade 1", "Trade 2", "Trade 3"];

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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [height, setHeight] = useState("auto");
  const containerRef = useRef(null);
  // useEffect(() => {
  //   if (containerRef.current) {
  //     setHeight(isCollapsed ? "0px" : `${containerRef.current.scrollHeight}px`);
  //   }
  // }, [isCollapsed, filter]);
  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   // target the filter builder root element
  //   const contentEl =
  //     containerRef.current.querySelector(".dx-filterbuilder") ||
  //     containerRef.current;

  //   // Observe size changes
  //   const resizeObserver = new ResizeObserver(() => {
  //     if (!isCollapsed) {
  //       // animate to new height when expanded
  //       setHeight(
  //         !isCollapsed ? "0px" : `${containerRef.current.scrollHeight}px`
  //       );
  //       // after animation, release to "auto"
  //       setTimeout(() => setHeight("auto"), 300);
  //     }
  //   });

  //   resizeObserver.observe(contentEl);

  //   return () => resizeObserver.disconnect();
  // }, [isCollapsed]);

  console.log(height, filter, "height");

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
        <div
          className='identity-header'
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            cursor: "pointer",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{isCollapsed ? "Show Filters" : "Hide Filters"} </span>
          <span>
            {isCollapsed ? (
              <ArrowD className='arrow-icon' />
            ) : (
              <ArrowU className='arrow-icon' />
            )}
          </span>
        </div>
        {/* ✅ COLLAPSIBLE FILTER BUILDER */}
        <div className='filter-builder-container'>
          <div
            className='filter-builder-wrapper'
            ref={containerRef}
            style={{
              maxHeight: isCollapsed ? "0px" : "1500px",
              overflow: isCollapsed ? "hidden" : "visible",
              transition: "max-height 0.4s ease",
            }}
          >
            <div>
              <h6>Basic Filters</h6>
              <div className='form-row'>
                <div className='form-group sell-select-wrapper'>
                  <label htmlFor='tradeType' className='input-label'>
                    Trade Desk/Book
                  </label>
                  <SelectBox
                    id='tradeType'
                    dataSource={tradeData}
                    value={tradeType}
                    placeholder='Select'
                    onValueChanged={(e) => setTradeType(e.value)}
                    className='custom-input'
                  />
                </div>

                <div className='form-group sell-select-wrapper'>
                  <label htmlFor='trader' className='input-label'>
                    Strategy
                  </label>
                  <SelectBox
                    id='strategy'
                    dataSource={strategyValue}
                    value={strategy}
                    placeholder='Select'
                    onValueChanged={(e) => setStrategy(e.value)}
                    className='custom-input'
                  />
                </div>
                <div className='form-group'>
                  <div className='check'>
                    <CheckBox defaultValue={false} />
                    <label className='input-label'>
                      Include Archived Records
                    </label>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='check'>
                    <Switch
                      defaultValue={switchValue}
                      onValueChanged={(e) => setSwitchValue(e.value)} // Update state on switch toggle
                      style={{ backgroundColor: switchValue ? "#fff" : "" }}
                    />
                    <label className='input-label'>
                      {switchValue ? "Pnl Shift On" : "Pnl Shift Off"}{" "}
                      {/* Conditionally render the label */}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <h6>Advanced Filters</h6>
            <FilterBuilder
              fields={fields}
              value={filter}
              onValueChanged={(e) => setFilter(e.value)}
            />
          </div>
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

          {/* New filterable business fields */}
          <Column dataField='tradeDesk' caption='Trade Desk' width={160} />
          <Column dataField='book' caption='Book' width={140} />
          <Column dataField='strategy' caption='Strategy' width={160} />
          <Column
            dataField='instrumentType'
            caption='Instrument Type'
            width={160}
          />
          <Column dataField='region' caption='Region' width={120} />
        </TreeList>
      </div>
    </div>
  );
};

export default Concentration;
