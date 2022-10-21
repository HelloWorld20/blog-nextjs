import { useDispatch } from "react-redux";
import { toggleSearch } from "@/store/actions";
import Script from "next/script";

import { useEffect } from "react";

export default function Search() {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    if (window.PagefindUI) {
      // @ts-ignore
      new window.PagefindUI({ element: "#search" });
    }
  }, []);

  return (
    <section className="relative w-screen h-screen bg-gray-50 bg-opacity-95 z-10">
      <div
        className="absolute right-10 top-10 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100"
        onClick={() => {
          dispatch(toggleSearch(false));
        }}
      >
        <i className="iconfont icon-close" style={{ lineHeight: "22px" }}></i>
      </div>
      <div id="search" className="max-h-screen overflow-auto"></div>
      <link href="./_pagefind/pagefind-ui.css" rel="stylesheet" type="text/css" />
      <Script
        src="./_pagefind/pagefind-ui.js"
        onLoad={() => {
          // @ts-ignore
          if (window.PagefindUI) {
            // @ts-ignore
            new window.PagefindUI({ element: "#search" });
          }
        }}
      />
    </section>
  );
}
