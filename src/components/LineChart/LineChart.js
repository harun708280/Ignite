import React, { useCallback, useState } from "react";

import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Margin,
  Tooltip,
  Grid,
} from "devextreme-react/chart";
import { Popup } from "devextreme-react/popup";
import SelectBox from "devextreme-react/select-box";
import DateRangeBox from "devextreme-react/date-range-box";
import service from "./data.js";
import "./linechart.scss";

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();

const msInDay = 1000 * 60 * 60 * 24;
const now = new Date();
const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const initialValue = [
  new Date(now.getTime() - msInDay * 3),
  new Date(now.getTime() + msInDay * 3),
];
const min = new Date(now.setDate(1));
const max = new Date(now.setDate(lastDay));
function convertRangeToDays([startDate, endDate]) {
  const diffInDay = Math.floor(
    Math.abs((endDate.valueOf() - startDate.valueOf()) / msInDay)
  );
  return diffInDay + 1;
}

const LineChart = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const categoryOptions = ["Category-1", "Category-2", "Category-3"];
  const showInfo = (e) => {
    setPopupVisible(true);
  };

  const hideInfo = () => {
    setPopupVisible(false);
  };

  const [selectedDays, setSelectedDays] = useState(
    convertRangeToDays(initialValue)
  );
  const onCurrentValueChange = useCallback(
    ({ value: [startDate, endDate] }) => {
      let daysCount = 0;
      if (startDate && endDate) {
        daysCount = convertRangeToDays([startDate, endDate]);
      }
      setSelectedDays(daysCount);
    },
    [setSelectedDays]
  );
  return (
    <React.Fragment>
      <div className='linechart-container' style={{}}>
        <div class='chart-card w-100'>
          <div class='chart-header'>
            <h3>Price Trend Analysis</h3>
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
          <div class='d-flex justify-content-end align-items-center year'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M7.02023 9.64645C6.82496 9.84171 6.82496 10.1583 7.02023 10.3536L10.8131 14.1464C11.1281 14.4614 11.6667 14.2383 11.6667 13.7929V6.20711C11.6667 5.76165 11.1281 5.53857 10.8131 5.85355L7.02023 9.64645Z'
                  fill='#C0C4CF'
                ></path>
              </svg>
            </button>
            <p>Year 2025</p>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M12.9798 9.64645C13.1751 9.84171 13.1751 10.1583 12.9798 10.3536L9.1869 14.1464C8.87192 14.4614 8.33334 14.2383 8.33334 13.7929V6.20711C8.33334 5.76165 8.87191 5.53857 9.1869 5.85355L12.9798 9.64645Z'
                  fill='#C0C4CF'
                ></path>
              </svg>
            </button>
          </div>
          <Chart
            palette={["#FEB42B", "#4FD6F8", "#2BFECD", "#CC2DDB"]}
            dataSource={countriesInfo}
          >
            <CommonSeriesSettings argumentField='country' />
            {energySources.map((item) => (
              <Series
                key={item.value}
                valueField={item.value}
                name={item.name}
              />
            ))}
            <Margin bottom={20} />
            <ArgumentAxis
              valueMarginsEnabled={false}
              discreteAxisDivisionMode='crossLabels'
            >
              <Grid visible={true} />
            </ArgumentAxis>
            <Legend
              verticalAlignment='bottom'
              horizontalAlignment='center'
              itemTextPosition='bottom'
            />

            <Tooltip enabled={true} />
          </Chart>
        </div>
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
    </React.Fragment>
  );
};
export default LineChart;
