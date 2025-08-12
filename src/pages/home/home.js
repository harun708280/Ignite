import React from "react";
import "./home.scss";
import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location,
} from "devextreme-react/responsive-box";
import { Link } from "react-router-dom";
import settingsIcon from "../../assets/images/icons/setting.svg";
import cardIcon from "../../assets/images/icons/card.svg";
import searchIcon from "../../assets/images/icons/search-normal-2.svg";
import exposureIcon from "../../assets/images/icons/svgexport-17 1.svg";
import importManagerIcon from "../../assets/images/icons/svgexport-18 1.svg";
import logisticsIcon from "../../assets/images/icons/location.svg";
import positionIcon from "../../assets/images/icons/svgexport-20 1.svg";
import snapshotIcon from "../../assets/images/icons/setting-3.svg";
import varIcon from "../../assets/images/icons/svgexport-22 1.svg";

import systemUpgradeIcon from "../../assets/images/icons/fi_1672594.svg";
import priceAlertIcon from "../../assets/images/icons/fi_3239957.svg";
import dataSyncIcon from "../../assets/images/icons/Frame.svg";
import clockIcon from "../../assets/images/icons/clock.svg";
import PNLSection from "../../components/PNL/PNL";
import DonutChart from "../../components/DonutChart/DonutChart";
import LineChart from "../../components/LineChart/LineChart";
const screen = (width) => {
  if (width < 768) return "sm"; // Small: phones
  if (width < 1200) return "md"; // Medium: tablets
  return "xl"; // Large: desktops
};

export default function Home() {
  return (
    <React.Fragment>
      <ResponsiveBox screenByWidth={screen} singleColumnScreen='sm'>
        {/* Main Layout */}
        <Row />
        <Row />
        <Row />
        <Row />

        <Col ratio={9} screen='xl' />
        <Col ratio={3} screen='xl' />
        <Col ratio={1} screen='md' />
        <Col ratio={1} screen='sm' />

        {/* Left Side: col-xl-9 with nested layout */}
        <Item>
          <Location row={0} col={0} screen='xl' />
          <Location row={0} col={0} screen='md' />
          <Location row={0} col={0} screen='sm' />
          <div style={{}}>
            <ResponsiveBox screenByWidth={screen} singleColumnScreen='sm'>
              {/* Two rows for nested layout */}
              <Row /> {/* Row 0: for two col-xl-6 */}
              <Row /> {/* Row 1: for col-xl-12 */}
              <Row /> {/* Row 1: for col-xl-12 */}
              <Col ratio={1} screen='sm' />
              <Col ratio={1} screen='md' />
              <Col ratio={1} screen='md' />
              <Col ratio={1} screen='xl' />
              <Col ratio={1} screen='xl' />
              {/* Nested col-xl-6 (1) */}
              <Item>
                <Location row={0} col={0} screen='sm' />
                <Location row={0} col={0} screen='md' />
                <Location row={0} col={0} screen='xl' />
                <div style={{ height: "100%" }}>
                  <DonutChart />
                </div>
              </Item>
              {/* Nested col-xl-6 (2) */}
              <Item>
                <Location row={0} col={1} screen='xl' />
                <Location row={0} col={1} screen='md' />
                <Location row={1} col={0} screen='sm' />
                <div>
                  <LineChart />
                </div>
              </Item>
              {/* Nested col-xl-12 */}
              <Item>
                <Location row={1} col={0} colspan={2} screen='xl' />
                <Location row={2} col={0} colspan={2} screen='md' />
                <Location row={2} col={0} screen='sm' />

                <PNLSection />
              </Item>
            </ResponsiveBox>
          </div>
        </Item>

        {/* Right Side: col-xl-3 */}
        <Item>
          <Location row={0} col={1} screen='xl' />
          <Location row={1} col={0} screen='md' />
          <Location row={0} col={0} screen='sm' />
          <div style={{}}>
            <div class='quick-links'>
              <h4>Quick Links</h4>
              <ul class='list__unstyled'>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={settingsIcon} alt='' />
                      Bulk Operations
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img className='credit-icon' src={cardIcon} alt='' />
                      Credit Exposure
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={searchIcon} alt='' />
                      Dynamic Query
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={exposureIcon} alt='' />
                      Exposure Detail
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={importManagerIcon} alt='' />
                      Import Manager
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={logisticsIcon} alt='' />
                      Logistics
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={positionIcon} alt='' />
                      Position Detail
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={snapshotIcon} alt='' />
                      System Snapshots
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <div>
                      <img src={varIcon} alt='' />
                      VaR
                    </div>
                    <i class='fa-solid fa-angle-right'></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div class='notifications'>
              <div class='notifications-header'>
                <h3 class='sec-title__title'>Notifications</h3>
                <p>12</p>
              </div>
              <div class='notification-cards'>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src={systemUpgradeIcon} alt='' />
                      System Upgrade
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src='/assets/images/icons/fi_3239957.svg' alt='' />
                      Price Alert
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src={dataSyncIcon} alt='' />
                      Data Sync Complete
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src={priceAlertIcon} alt='' />
                      Price Alert
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
                <div class='notification-card'>
                  <div class='card-header'>
                    <div>
                      <img src={priceAlertIcon} alt='' />
                      Price Alert
                    </div>
                    <Link href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                      >
                        <path
                          d='M3.5 10.5L10.5 3.5M3.5 3.5L10.5 10.5'
                          stroke='#C0C4CF'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div class='card-body'>
                    <p>
                      Please be informed that a new version of IGNITE's CRTRM
                      platform is available.
                    </p>
                  </div>
                  <div class='card-footer'>
                    <img src={clockIcon} alt='' />
                    <p>15 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Item>
      </ResponsiveBox>
    </React.Fragment>
  );
}
