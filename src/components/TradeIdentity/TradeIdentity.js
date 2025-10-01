import React, { useState, useRef, useEffect, useCallback } from "react";
import { ReactComponent as ArrowD } from "../../assets/images/icons/arreowD.svg";
import { ReactComponent as ArrowU } from "../../assets/images/icons/arrowU.svg";
import { SelectBox, DateBox, TextBox } from "devextreme-react";
import "./TradeIdentity.scss";
import Button from "../ui/Button";
import { ReactComponent as reload } from "../../assets/images/icons/realods.svg";
import Tabs from "devextreme-react/tabs";
import {
  orientations,
  tabsText,
  stylingModeLabel,
  iconPositionLabel,
  tabsIconAndText,
  stylingModes,
  iconPositions,
  tabsIcon,
  orientationLabel,
} from "./tabData";
const STRICT_WIDTH_CLASS = "strict-width";

const TradeIdentity = () => {
  const [tradeType, setTradeType] = useState("Futures");
  const [internalTradeId] = useState("61608");
  const [tradeDate, setTradeDate] = useState(new Date("2025-05-27"));
  const [trader, setTrader] = useState(null);
  const [operator, setOperator] = useState(null);
  const [status, setStatus] = useState("Pending");
  const [strategy, setStrategy] = useState("Futures");
  const [tickets, setTickets] = useState(null);
  const [productCode] = useState("Pending");

  const traders = ["Trader 1", "Trader 2", "Trader 3"];
  const operators = ["Operator 1", "Operator 2"];
  const statuses = ["Pending", "Completed", "Cancelled"];
  const strategies = ["Futures"];
  const ticketsList = ["Select 1", "Select 2", "Select 3"];

  // const tabs = [
  //   "Trade Details",
  //   "Invoice Activity",
  //   "Prepayments",
  //   "Associated Costs",
  //   "User-Defined",
  //   "Notes and Audit History",
  // ];

  const [isCollapsed, setIsCollapsed] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isCollapsed ? "0px" : `${contentRef.current.scrollHeight}px`);
    }
  }, [isCollapsed]);

  const [orientation, setOrientation] = useState(orientations[0]);
  const [stylingMode, setStylingMode] = useState(stylingModes[1]);
  const [iconPosition, setIconPosition] = useState(iconPositions[0]);
  const [showNavigation, setShowNavigation] = useState(true);
  const [scrollContent, setScrollContent] = useState(true);
  const [fullWidth, setFullWidth] = useState(false);
  const [width, setWidth] = useState("auto");
  const [rtlEnabled, setRtlEnabled] = useState(false);
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

  console.log(height, "height identity");

  return (
    <div className='trade-identity-container trade-identity'>
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
        {/* {tabs.map((tab, index) => (
          <button
            key={index}
            className='tab-button'
            style={
              index === 0
                ? { backgroundColor: "#512da8", border: "none" }
                : {
                    border: "1px solid #923CF6",
                    backgroundColor: "transparent",
                  }
            }
          >
            {tab}
          </button>
        ))} */}
      </div>

      <div>
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
          <span>Trade Identity: {internalTradeId}</span>
          <span>
            {isCollapsed ? (
              <ArrowD className='arrow-icon' />
            ) : (
              <ArrowU className='arrow-icon' />
            )}
          </span>
        </div>

        <div
          ref={contentRef}
          className='trade-form-wrapper'
          style={{
            height: height,
            overflow: "hidden",
            transition: "height 0.4s ease",
          }}
        >
          <div className='trade-form trade_id'>
            <div className='form-row'>
              <div className='form-group sell-select-wrapper'>
                <label htmlFor='tradeType' className='input-label'>
                  Trade Type
                </label>
                <SelectBox
                  id='tradeType'
                  dataSource={strategies}
                  value={tradeType}
                  placeholder='Select'
                  onValueChanged={(e) => setTradeType(e.value)}
                  className='custom-input'
                />
              </div>

              <div className='form-group sell-select-wrapper'>
                <label htmlFor='internalTradeId' className='input-label'>
                  Internal Trade Id
                </label>
                <TextBox
                  id='internalTradeId'
                  value={internalTradeId}
                  className='custom-input'
                  readOnly
                />
              </div>

              <div className='form-group sell-select-wrapper'>
                <label htmlFor='externalTradeId' className='input-label'>
                  External Trade Id:
                </label>
                <TextBox
                  id='externalTradeId'
                  value={""}
                  className='custom-input'
                  onValueChanged={() => {}}
                />
              </div>

              <div className='form-group sell-select-wrapper'>
                <label htmlFor='tradeDate' className='input-label'>
                  Trade Date:
                </label>
                <DateBox
                  id='tradeDate'
                  value={tradeDate}
                  onValueChanged={(e) => setTradeDate(e.value)}
                  displayFormat='dd-MM-yyyy'
                  className='custom-input'
                />
              </div>

              <div className='form-group sell-select-wrapper'>
                <label htmlFor='trader' className='input-label'>
                  Trader
                </label>
                <SelectBox
                  id='trader'
                  dataSource={traders}
                  value={trader}
                  placeholder='Select'
                  onValueChanged={(e) => setTrader(e.value)}
                  className='custom-input'
                />
              </div>

              <div className='form-group sell-select-wrapper'>
                <label htmlFor='operator' className='input-label'>
                  Operator
                </label>
                <SelectBox
                  id='operator'
                  dataSource={operators}
                  value={operator}
                  placeholder='Select'
                  onValueChanged={(e) => setOperator(e.value)}
                  className='custom-input'
                />
              </div>

              <div className='form-group sell-select-wrapper'>
                <label htmlFor='status' className='input-label'>
                  Status
                </label>
                <SelectBox
                  id='status'
                  dataSource={statuses}
                  value={status}
                  placeholder='Select'
                  onValueChanged={(e) => setStatus(e.value)}
                  className='custom-input'
                />
              </div>
            </div>

            <div className='form-row2'>
              <div className=''>
                <div className='Strategy'>
                  <label htmlFor='strategy' className='input-label'>
                    Strategy
                  </label>
                  <label className='input-label'>Book: Demo Products</label>
                </div>
                <SelectBox
                  id='strategy'
                  dataSource={strategies}
                  value={strategy}
                  placeholder='Select'
                  onValueChanged={(e) => setStrategy(e.value)}
                  className='custom-input'
                />
              </div>

              <Button icon={reload} />

              <div className=''>
                <label htmlFor='tickets' className='input-label'>
                  Tickets | Description
                </label>
                <SelectBox
                  id='tickets'
                  dataSource={ticketsList}
                  value={tickets}
                  placeholder='Select'
                  onValueChanged={(e) => setTickets(e.value)}
                  className='custom-input'
                />
              </div>

              <div className=''>
                <label htmlFor='productCode' className='input-label'>
                  Product Code
                </label>
                <SelectBox
                  id='productCode'
                  dataSource={statuses}
                  value={productCode}
                  placeholder='Select'
                  onValueChanged={() => {}}
                  className='custom-input'
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeIdentity;
