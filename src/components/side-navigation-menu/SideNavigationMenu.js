import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { Item, TreeView } from "devextreme-react/tree-view";
import * as events from "devextreme/events";
import { navigation, navigationTwo } from "../../app-navigation";
import { useNavigation } from "../../contexts/navigation";
import { useScreenSize } from "../../utils/media-query";
import "./SideNavigationMenu.scss";
import logo from "../../assets/images/logo-big.svg";
import logoS from "../../assets/images/logo-small.svg";
import searchIcon from "../../assets/images/icons/search-normal.svg";
import { ThemeContext } from "../../theme";
import AppFooter from "../AppFooter/AppFooter";
import { Button, TextBox } from "devextreme-react";

export default function SideNavigationMenu(props) {
  const {
    children,
    selectedItemChanged,
    openMenu,
    compactMode,
    onMenuReady,
    toggleMenu,
    menuToggleEnabled,
  } = props;

  const theme = useContext(ThemeContext);
  const { isLarge } = useScreenSize();
  function normalizePath() {
    return navigation.map((item) => ({
      ...item,
      expanded: false,
      path: item.path && !/^\//.test(item.path) ? `/${item.path}` : item.path,
    }));
  }
  function normalizeTwoPath() {
    return navigationTwo.map((item) => ({
      ...item,
      expanded: isLarge,
      path: item.path && !/^\//.test(item.path) ? `/${item.path}` : item.path,
    }));
  }

  const items = useMemo(
    normalizePath,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const itemsTwo = useMemo(
    normalizeTwoPath,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const {
    navigationData: { currentPath },
  } = useNavigation();

  // const treeViewRef = useRef(null);
  const mainTreeViewRef = useRef(null);
  const adminTreeViewRef = useRef(null);
  const wrapperRef = useRef(null);
  const getWrapperRef = useCallback(
    (element) => {
      const prevElement = wrapperRef.current;
      if (prevElement) {
        events.off(prevElement, "dxclick");
      }

      wrapperRef.current = element;
      events.on(element, "dxclick", (e) => {
        openMenu(e);
      });
    },
    [openMenu]
  );

  // useEffect(() => {
  //   const treeView = treeViewRef.current && treeViewRef.current.instance();
  //   if (!treeView) {
  //     return;
  //   }

  //   if (currentPath !== undefined) {
  //     treeView.selectItem(currentPath);
  //     treeView.expandItem(currentPath);
  //   }

  //   if (compactMode) {
  //     treeView.collapseAll();
  //   }
  // }, [currentPath, compactMode]);
  useEffect(() => {
    const mainTreeView = mainTreeViewRef.current?.instance();
    const adminTreeView = adminTreeViewRef.current?.instance();

    if (mainTreeView) {
      mainTreeView.selectItem(currentPath);
      mainTreeView.expandItem(currentPath);
      if (compactMode) {
        mainTreeView.collapseAll();
      }
    }

    if (adminTreeView) {
      adminTreeView.selectItem(currentPath);
      adminTreeView.expandItem(currentPath);
      if (compactMode) {
        adminTreeView.collapseAll();
      }
    }
  }, [currentPath, compactMode]);

  return (
    <div
      className={`dx-swatch-additional${
        theme?.isDark() ? "-dark" : ""
      } side-navigation-menu`}
      ref={getWrapperRef}
    >
      <div className='main-logo'>
        <img src={logoS} alt='Logo' />
        <img src={logo} alt='Logo' />
      </div>
      <div className='user-info'>
        <h2>Hi, Zahidul Islam</h2>
      </div>

      <div className='search'>
        <TextBox placeholder='Search...' className='search-box' />
        <img src={searchIcon} alt='' />
      </div>
      {children}
      <div className='sidebar'>
        <div className={"menu-container"}>
          <TreeView
            ref={mainTreeViewRef}
            items={items}
            keyExpr={"path"}
            selectionMode={"single"}
            focusStateEnabled={false}
            expandEvent={"click"}
            onItemClick={selectedItemChanged}
            onContentReady={onMenuReady}
            width={"100%"}
            itemRender={({ text, icon: Icon }) => (
              <div className='treeview-item'>
                {Icon && <Icon className='treeview-icon' />}
                <span>{text}</span>
              </div>
            )}
          />
        </div>
        <div className={"admin-menu"}>
          <h5>Admin Portal</h5>
          <TreeView
            ref={adminTreeViewRef}
            items={itemsTwo}
            keyExpr={"path"}
            selectionMode={"single"}
            focusStateEnabled={false}
            expandEvent={"click"}
            onItemClick={selectedItemChanged}
            onContentReady={onMenuReady}
            width={"100%"}
            itemRender={({ text, icon: Icon }) => (
              <div className='treeview-item'>
                {Icon && <Icon className='treeview-icon' />}
                <span>{text}</span>
              </div>
            )}
          />
        </div>
        <AppFooter>
          Copyright © {new Date().getFullYear()} Ignite CTRM. <br /> All rights
          reserved.
        </AppFooter>
      </div>
    </div>
  );
}
