import React, { useState } from "react";
import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
} from "devextreme-react/pie-chart";
import { Popup } from "devextreme-react/popup";
import SelectBox from "devextreme-react/select-box";
import DateRangeBox from "devextreme-react/date-range-box";
import { populationByRegions } from "./data.js";
import "./donutchart.scss";

function customizeTooltip(arg) {
  return {
    text: `${arg.argumentText}\n${(arg.percent * 100).toFixed(0)}%`,
  };
}
const categoryOptions = ["Category-1", "Category-2", "Category-3"];

const DonutChart = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const showInfo = (e) => {
    setPopupVisible(true);
  };

  const hideInfo = () => {
    setPopupVisible(false);
  };
  return (
    <div style={{ height: "100%" }}>
      <div class='chart-card w-100'>
        <div class='chart-header'>
          <h3>Distribution by Mode</h3>
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
                />
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
                />
                <path
                  d='M1.16675 7C1.16675 10.22 3.78008 12.8333 7.00008 12.8333'
                  stroke='#C0C4CF'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-dasharray='3 3'
                />
              </svg>
            </span>
            <span onClick={showInfo}>
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
                />
                <path
                  d='M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z'
                  stroke='#C0C4CF'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </span>
          </div>
        </div>

        <PieChart
          id='pie'
          type='doughnut'
          palette={[
            "#2b63fe",
            "#FE4E2B",
            "#FEB42B",
            "#4FD6F8",
            "#CC2DDB",
            "#2BFECD",
          ]}
          dataSource={populationByRegions}
        >
          <Series argumentField='region'>
            <Label visible={false} format='millions'>
              <Connector visible={true} />
            </Label>
          </Series>

          <Legend
            margin={20}
            color={"#fff"}
            horizontalAlignment='center'
            verticalAlignment='bottom'
          />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
            <Format type='millions' />
          </Tooltip>
        </PieChart>
      </div>
      <Popup
        visible={popupVisible}
        onHiding={hideInfo}
        dragEnabled={false}
        hideOnOutsideClick={true}
        showCloseButton={false}
        showTitle={false}
        title='Information'
        container='.dx-viewport'
        width={500}
        height={250}
      >
        <div className='dx-fieldset'>
          <div className='dx-field'>
            <div className='dx-field-label'>Category</div>
            <div className='dx-field-value'>
              <SelectBox
                items={categoryOptions}
                placeholder='Filter'
                showClearButton={true}
                dropDownOptions={{
                  container: ".dx-popup-content", // IMPORTANT!
                }}
              />
            </div>
          </div>
          <div className='dx-field'>
            <div className='dx-field-label'>Date Range</div>
            <div className='dx-field-value'>
              <DateRangeBox applyValueMode='useButtons' />
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default DonutChart;
