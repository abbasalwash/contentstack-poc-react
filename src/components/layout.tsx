import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import DevTools from "./devtools";
import { getHeaderRes, getFooterRes, getAllEntries, getGroupedNavigationRes } from "../helper";
import { onEntryChange } from "../sdk/entry";
import {
  EntryProps,
  HeaderProps,
  FooterProps,
  NavmenuProps,
  HeadermenuProps,
} from "../typescript/layout";
import Navigation from "./navigation";
import { GroupedNavigation } from "../typescript/generated";

export default function Layout({ entry }: { entry: EntryProps }) {
  const history = useNavigate();
  const [getLayout, setLayout] = useState({
    header: {} as HeaderProps,
    footer: {} as FooterProps,
    navHeaderList: {} as HeadermenuProps,
    navFooterList: {} as NavmenuProps,
    navigation: {} as GroupedNavigation,
  });
  const mergeObjs = (...objs: any) => Object.assign({}, ...objs);
  const jsonObj = mergeObjs(
    { header: getLayout.header },
    { footer: getLayout.footer },
    entry
  );

  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const header = await getHeaderRes();
      const footer = await getFooterRes();
      const navigation = await getGroupedNavigationRes();
      !header || !navigation || (!footer && setError(true));
      const navHeaderList = header.navigation_menu;
      const navFooterList = footer.navigation.link;

      setLayout({
        header: header,
        footer: footer,
        navHeaderList,
        navFooterList,
        navigation,
      });
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }

  useEffect(() => {
    !error && onEntryChange(fetchData);

    if (error) {
      console.error("error...", error);
      error && history("/error");      
    }
  }, [error]);

  return (
    <div className='layout'>
      <Header header={getLayout.header} navMenu={getLayout.navHeaderList} />
      <DevTools response={jsonObj} />
      <Navigation groupedNavigation={getLayout.navigation} />
      <Outlet />
      <Footer footer={getLayout.footer} navMenu={getLayout.navFooterList} />
    </div>
  );
}
