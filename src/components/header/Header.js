import React from "react";
import Toolbar, { Item } from "devextreme-react/toolbar";
import Button from "devextreme-react/button";
import UserPanel from "../user-panel/UserPanel";
import "./Header.scss";
import { Template } from "devextreme-react/core/template";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";
import { TextBox } from "devextreme-react";
import searchIcon from "../../assets/images/icons/search-normal.svg";

export default function Header({ menuToggleEnabled, title, toggleMenu }) {
  return (
    <header className={"header-component"}>
      <Toolbar className={"header-toolbar"}>
        <Item
          visible={menuToggleEnabled}
          location={"before"}
          widget={"dxButton"}
          cssClass={"menu-button"}
        >
          <Button icon='menu' stylingMode='text' onClick={toggleMenu} />
        </Item>
        <Item location={"before"} locateInMenu='auto'>
          <div class='d-flex gap-2 align-items-center flex-column flex-md-row'>
            <div className='search'>
              <TextBox placeholder='Search...' className='search-box' />
              <img src={searchIcon} alt='' />
            </div>
          </div>
        </Item>

        <Item location={"after"}>
          <div class='menu-bar'>
            <ThemeSwitcher />
            <button class='icon-button messages-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <g opacity='0.8'>
                  <path
                    d='M7.25024 8.00003C7.25024 7.58582 7.58603 7.25003 8.00024 7.25003H12.0002C12.4144 7.25003 12.7502 7.58582 12.7502 8.00003C12.7502 8.41424 12.4144 8.75003 12.0002 8.75003H8.00024C7.58603 8.75003 7.25024 8.41424 7.25024 8.00003Z'
                    fill='white'
                  />
                  <path
                    d='M7.25024 12C7.25024 11.5858 7.58603 11.25 8.00024 11.25H16.0002C16.4144 11.25 16.7502 11.5858 16.7502 12C16.7502 12.4142 16.4144 12.75 16.0002 12.75H8.00024C7.58603 12.75 7.25024 12.4142 7.25024 12Z'
                    fill='white'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.96668 1.25003H14.0338C15.4055 1.25003 16.4809 1.25002 17.3453 1.32064C18.2254 1.39255 18.9525 1.54141 19.6106 1.87674C20.6926 2.42801 21.5722 3.30765 22.1235 4.38958C22.4588 5.04772 22.6077 5.77482 22.6796 6.65497C22.7502 7.51931 22.7502 8.59474 22.7502 9.96645V11.1842V11.3311C22.7504 12.8797 22.7506 13.8244 22.5179 14.6179C21.9669 16.4971 20.4973 17.9667 18.6181 18.5177C17.8246 18.7504 16.8799 18.7502 15.3313 18.75C15.2829 18.75 15.234 18.75 15.1844 18.75H14.6356L14.5753 18.7501C13.7081 18.7556 12.8634 19.0264 12.1545 19.5259L12.1053 19.5609L9.49465 21.4257C7.99014 22.5003 6.01312 20.9484 6.69978 19.2317C6.79207 19.001 6.62215 18.75 6.37365 18.75H5.7719C3.27465 18.75 1.25024 16.7256 1.25024 14.2283V9.96647C1.25024 8.59475 1.25023 7.51932 1.32085 6.65497C1.39276 5.77482 1.54162 5.04772 1.87695 4.38958C2.42822 3.30765 3.30786 2.42801 4.38979 1.87674C5.04793 1.54141 5.77503 1.39255 6.65518 1.32064C7.51953 1.25002 8.59496 1.25003 9.96668 1.25003ZM6.77732 2.81566C5.98994 2.87999 5.48221 3.00362 5.07078 3.21325C4.27109 3.62071 3.62092 4.27088 3.21346 5.07057C3.00383 5.482 2.8802 5.98973 2.81587 6.77711C2.75082 7.57325 2.75024 8.58752 2.75024 10V14.2283C2.75024 15.8972 4.10308 17.25 5.7719 17.25H6.37365C7.68335 17.25 8.57891 18.5728 8.0925 19.7888C7.96221 20.1145 8.33733 20.409 8.62279 20.2051L11.2904 18.2997C12.2495 17.6239 13.3924 17.2576 14.5657 17.2501L14.6356 17.25H15.1844C16.9263 17.25 17.6365 17.2424 18.196 17.0783C19.585 16.671 20.6712 15.5848 21.0785 14.1958C21.2426 13.6363 21.2502 12.9261 21.2502 11.1842V10C21.2502 8.58752 21.2496 7.57325 21.1846 6.77711C21.1202 5.98973 20.9966 5.482 20.787 5.07057C20.3795 4.27088 19.7293 3.62071 18.9297 3.21325C18.5182 3.00362 18.0105 2.87999 17.2231 2.81566C16.427 2.75061 15.4127 2.75003 14.0002 2.75003H10.0002C8.58773 2.75003 7.57346 2.75061 6.77732 2.81566Z'
                    fill='white'
                  />
                </g>
              </svg>
            </button>

            <button class='icon-button notifications-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <g opacity='0.8'>
                  <path
                    d='M12 6.44V9.77'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  />
                  <path
                    d='M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  />
                  <path
                    d='M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.65004 21.17C9.05004 20.57 8.67004 19.73 8.67004 18.82'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                  />
                </g>
              </svg>
            </button>
            <UserPanel menuMode='context' />
          </div>
        </Item>
        {/* <Item
          location='after'
          locateInMenu='auto'
          menuItemTemplate='userPanelTemplate'
        >
          <UserPanel menuMode='context' />
        </Item> */}
        <Template name='userPanelTemplate'>
          <UserPanel menuMode='list' />
        </Template>
      </Toolbar>
    </header>
  );
}
