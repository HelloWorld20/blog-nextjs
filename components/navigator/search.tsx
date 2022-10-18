import { useDispatch } from "react-redux";
import { toggleSearch } from "@/store/actions";
import Script from "next/script";

import "pagefind/bin/out/_pagefind/pagefind-ui.css";

export default function Search() {
  const dispatch = useDispatch();
  return (
    <section className="relative w-screen h-screen bg-gray-50 bg-opacity-95 z-10">
      <i
        onClick={() => {
          dispatch(toggleSearch(false));
        }}
      >
        close
      </i>
      <div id="search">search</div>
      <Script
        src="./_pagefind/pagefind-ui.js"
        onLoad={() => {
          // @ts-ignore
          new PagefindUI({ element: "#search" });
        }}
      />
    </section>
  );
}
