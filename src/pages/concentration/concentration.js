import TreeList, {
  Column,
  Item,
  SearchPanel,
} from "devextreme-react/tree-list";
import { orientations, tabsText, stylingModes, iconPositions } from "./tabData";
import Tabs from "devextreme-react/tabs";
// import "devextreme/dist/css/dx.light.css";
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
import { useCallback, useState } from "react";
import { Toolbar } from "devextreme-react";
const data = [
  // Root
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
  },

  // Trades
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
  },

  // Physical
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
  },

  // Buy under Physical
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
  },

  // Sell under Physical
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
  },

  // Outcome Adjustment
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
  },

  // Loss under Outcome Adjustment
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
  },

  // Futures
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
  },

  // NYMEX under Futures
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
  },

  // Sell under NYMEX
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
const STRICT_WIDTH_CLASS = "strict-width";
const Concentration = () => {
  const [width, setWidth] = useState("auto");
  const [rtlEnabled, setRtlEnabled] = useState(false);
  const [scrollContent, setScrollContent] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const [stylingMode, setStylingMode] = useState(stylingModes[1]);
  const [iconPosition, setIconPosition] = useState(iconPositions[0]);
  const [orientation, setOrientation] = useState(orientations[0]);
  const [fullWidth, setFullWidth] = useState(false);
  const [widgetWrapperClasses, setWidgetWrapperClasses] = useState(
    "widget-wrapper widget-wrapper-horizontal"
  );

  const enforceWidthConstraint = useCallback(
    (shouldRestrictWidth) => {
      const callback = (prevClasses) => {
        const restClasses = prevClasses
          .split(" ")
          .filter((className) => className !== STRICT_WIDTH_CLASS)
          .join(" ");
        const strictWidthClass = shouldRestrictWidth ? STRICT_WIDTH_CLASS : "";
        return `${restClasses} ${strictWidthClass}`;
      };
      setWidgetWrapperClasses(callback);
    },
    [setWidgetWrapperClasses]
  );
  const stylingModeChanged = useCallback(
    (e) => {
      setStylingMode(e.value);
    },
    [setStylingMode]
  );
  const iconPositionChanged = useCallback(
    (e) => {
      setIconPosition(e.value);
    },
    [setIconPosition]
  );
  const orientationChanged = useCallback(
    (e) => {
      const isVertical = e.value === "vertical";
      const callback = (prevClasses) => {
        const restClasses = prevClasses
          .split(" ")
          .filter(
            (className) =>
              className !==
              (isVertical
                ? "widget-wrapper-horizontal"
                : "widget-wrapper-vertical")
          )
          .join(" ");
        return `${restClasses} widget-wrapper-${e.value}`;
      };
      setWidgetWrapperClasses(callback);
      setOrientation(e.value);
    },
    [setOrientation, setWidgetWrapperClasses]
  );
  const showNavigationChanged = useCallback(
    (e) => {
      const shouldRestrictWidth = e.value || scrollContent;
      enforceWidthConstraint(shouldRestrictWidth);
      setShowNavigation(e.value);
    },
    [scrollContent, setShowNavigation, enforceWidthConstraint]
  );
  const scrollContentChanged = useCallback(
    (e) => {
      const shouldRestrictWidth = e.value || showNavigation;
      enforceWidthConstraint(shouldRestrictWidth);
      setScrollContent(e.value);
    },
    [showNavigation, setScrollContent, enforceWidthConstraint]
  );
  const fullWidthChanged = useCallback(
    (e) => {
      setFullWidth(e.value);
      setWidth(e.value ? "100%" : "auto");
    },
    [setFullWidth, setWidth]
  );
  const rtlEnabledChanged = useCallback(
    (e) => {
      setRtlEnabled(e.value);
    },
    [setRtlEnabled]
  );
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

      <div className='treelist-wrapper'>
        <TreeList
          id='concentration'
          dataSource={data}
          keyExpr='id'
          parentIdExpr='parentId'
          showBorders={true}
          columnAutoWidth={true}
          defaultExpandedRowKeys={[1, 2, 3, 6, 8, 9]}
          showRowLines={true}
        >
          <Toolbar>
            <Item location='before'>
              <h2 className='treelist-header'>Concentration Report</h2>
            </Item>
            <Item location='after' name='searchPanel' />
          </Toolbar>

          <SearchPanel visible={true} width={220} />

          <Column dataField='item' caption='Item Id' width={240} />
          <Column
            dataField='quantityUOM'
            caption='Quantity (UOM)'
            format={{ type: "fixedPoint", precision: 3 }}
          />
          <Column
            dataField='quantityMT'
            caption='Quantity (MT)'
            format={{ type: "fixedPoint", precision: 3 }}
          />
          <Column dataField='quantityBBL' caption='Quantity (BBL)' />
          <Column
            dataField='price'
            caption='Underlying Price'
            alignment='right'
          />
          <Column dataField='pnl' caption='Profit & Loss' alignment='right' />
          <Column dataField='cashflow' caption='Cashflow' alignment='right' />
          <Column dataField='total' caption='Total' alignment='right' />
        </TreeList>
      </div>
    </div>
  );
};

export default Concentration;
