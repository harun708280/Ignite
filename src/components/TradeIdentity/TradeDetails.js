import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as ArrowD } from "../../assets/images/icons/arreowD.svg";
import { ReactComponent as ArrowU } from "../../assets/images/icons/arrowU.svg";
import { SelectBox, DateBox, TextBox } from "devextreme-react";
import Switch from "devextreme-react/switch";
import "./TradeIdentity.scss";
import { CheckBox } from "devextreme-react/check-box";
import SpecialButton from "../ui/SpecialButton";

const TradeDetails = () => {
  const [tradeType, setTradeType] = useState("Futures");
  const [commodity, setCommodity] = useState("Gasoline");
  const [units, setUnits] = useState("GAL");
  const [uomEquiv, setUomEquiv] = useState("GAL to MT");

  const traders = ["Trader 1", "Trader 2", "Trader 3"];

  const strategies = ["Futures"];

  const [isCollapsed, setIsCollapsed] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isCollapsed ? "0px" : `${contentRef.current.scrollHeight}px`);
    }
  }, [isCollapsed]);

  return (
    <div className="trade-identity-container TradeDetails">
      <div
        className="identity-header"
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          cursor: "pointer",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>Trade Details</span>
        <span>
          {isCollapsed ? (
            <ArrowD className="arrow-icon" />
          ) : (
            <ArrowU className="arrow-icon" />
          )}
        </span>
      </div>

      <div
        ref={contentRef}
        className="trade-form-wrapper"
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.4s ease",
        }}
      >
        <div className="divide">
          <div className="col-span-1 sell">
            <p className="sell-t">Buy/Sell</p>
            <button className="sell-button">Sell</button>
          </div>

          <div className="col-span-2 sell">
            <div className="">
              <p className="sell-t">Company and Exchange Details</p>

              <div className="flex">
                <div className=" flex2 sell-select-wrapper">
                  <label className="text-w">Trade Type</label>
                  <SelectBox
                    dataSource={strategies}
                    value={tradeType}
                    placeholder="ignite Trading, LLC"
                    onValueChanged={(e) => setTradeType(e.value)}
                    className=""
                  />
                </div>

                <div className=" flex2 sell-select-wrapper">
                  <label>Exchange</label>
                  <SelectBox
                    dataSource={traders}
                    placeholder="NYMEX"
                    onValueChanged={(e) => setCommodity(e.value)}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Product">
          <div className="product-col-span-2">
            <div className="product-button">
              <SpecialButton name="Specifications" />
              <SpecialButton
                name="Notes"
                bgColor="#CDCDCD"
                textColor="#181818"
              />
            </div>
            <div>
              <div className="product-form-row">
                <div className="form-group sell-select-wrapper">
                  <label className="input-label">Commodity/Product</label>
                  <SelectBox
                    dataSource={["Gasoline"]}
                    value={commodity}
                    onValueChanged={(e) => setCommodity(e.value)}
                    className="custom-input"
                  />
                </div>
                <div className="form-group sell-select-wrapper">
                  <label className="input-label">Units (UOM):</label>
                  <SelectBox
                    dataSource={["GAL", "MT"]}
                    value={units}
                    onValueChanged={(e) => setUnits(e.value)}
                    className="custom-input"
                  />
                </div>
                <div className="form-group sell-select-wrapper">
                  <label className="input-label">UOM Equiv:</label>
                  <SelectBox
                    dataSource={["GAL", "MT"]}
                    value={uomEquiv}
                    onValueChanged={(e) => setUomEquiv(e.value)}
                    placeholder="GAL to MT"
                    className="custom-input"
                  />
                </div>
              </div>
              <div className="product-form-row-2">
                <div className="form-group sell-select-wrapper">
                  <label className="input-label">Lots:</label>
                  <TextBox value="150,00000" className="custom-input" />
                </div>
                <div className="form-group sell-select-wrapper">
                  <label className="input-label">Quantity:</label>
                  <TextBox value="6,300,000.000000" className="custom-input" />
                </div>
                <div className="form-group sell-select-wrapper"></div>
              </div>
            </div>
            <div className="bottom-line"></div>
            <div className="product-button">
              <SpecialButton name="Associates Accounts" />
              <SpecialButton
                name="Trade Matching"
                bgColor="#CDCDCD"
                textColor="#181818"
              />
            </div>

            <div>
              <div className="form-group">
                <label className="input-label">Clearing Account</label>
                <SelectBox
                  placeholder="Select or enter a clear account...."
                  onValueChanged={(e) => setCommodity(e.value)}
                  className="custom-input"
                />
              </div>
              <div className="form-group">
                <label className="input-label">Broker</label>
                <SelectBox
                  placeholder="SSelect or enter a clear account...."
                  onValueChanged={(e) => setUnits(e.value)}
                  className="custom-input"
                />
              </div>
              <div className="form-group">
                <label className="input-label">Financing Bank (Account):</label>
                <SelectBox
                  placeholder="Select or enter a clear account...."
                  onValueChanged={(e) => setUomEquiv(e.value)}
                  className="custom-input"
                />
              </div>

              <div className="check">
                <CheckBox defaultValue={false} />
                <label className="input-label">Cleared/Exchange</label>
              </div>
            </div>
          </div>

          <div className="product-col-span-2 hight">
            <div className="product-button">
              <SpecialButton name="Pricing Structure" />

              <SpecialButton
                name="Pricing Schedule: 6,300,000 GAL"
                bgColor="#CDCDCD"
                textColor="#181818"
              />
              <SpecialButton
                name="FX Settings"
                bgColor="#CDCDCD"
                textColor="#181818"
              />
            </div>

            <div className="product-form-row">
              <div className="form-group sell-select-wrapper">
                <label className="input-label">Price currency</label>
                <SelectBox
                  dataSource={["USD"]}
                  placeholder="USD"
                  className="custom-input"
                />
              </div>
              <div className="form-group sell-select-wrapper">
                <label className="input-label">Cashflow Currency</label>
                <SelectBox
                  dataSource={["USD"]}
                  placeholder="USD"
                  className="custom-input"
                />
              </div>
              <div className="form-group sell-select-wrapper">
                <label className="input-label">Underlying Instrument</label>
                <SelectBox
                  dataSource={["Gasoline"]}
                  placeholder="GAL to MT"
                  className="custom-input"
                />
              </div>
            </div>
            <div className="product-form-row-2">
              <div className="form-group sell-select-wrapper">
                <label className="input-label">Fixed Price</label>
                <TextBox placeholder="$2,06000" className="custom-input" />
              </div>
              <div className="form-group sell-select-wrapper">
                <label className="input-label">Contract Date</label>
                <DateBox placeholder="June 2025" className="custom-input" />
              </div>
              <div className="form-group sell-select-wrapper">
                <label className="input-label">Expiry Date</label>
                <DateBox placeholder="30-05-2025" className="custom-input" />
              </div>
            </div>
            <div className="product-form-row-3">
              <div className="form-group">
                <label className="input-label">Delivery Start Date:</label>
                <DateBox placeholder="30-05-2025" className="custom-input" />
              </div>
              <div className="form-group">
                <label className="input-label">Delivery End Date:</label>
                <DateBox placeholder="30-05-2025" className="custom-input" />
              </div>

              <div className="check">
                <Switch defaultValue={true} />
                <label className="input-label">Cents Off</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeDetails;
