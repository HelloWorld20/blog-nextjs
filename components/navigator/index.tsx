import { toggleNav, toggleSearch } from "@/store/actions";
import { useDispatch, useSelector } from "react-redux";
import Pannel from "./pannel";
import SearchPannel from "./search";

export default function Navigator() {
  const dispatch = useDispatch();

  const { navExpended, searchExpended } = useSelector<StoreState, appModel>(
    (state) => state.app
  );

  const expended = navExpended || searchExpended;

  return (
    <>
      {!expended && (
        <div className="absolute top-10 right-10 z-10 text-xs">
          <div
            className="absolute right-10 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100"
            onClick={() => {
              dispatch(toggleSearch(!searchExpended));
            }}
          >
            <i
              className="iconfont icon-search"
              style={{ lineHeight: "22px" }}
            ></i>
          </div>
          <div
            className="absolute right-0 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100"
            onClick={() => {
              dispatch(toggleNav(!navExpended));
            }}
          >
            <i
              className="iconfont icon-menu"
              style={{ lineHeight: "22px" }}
            ></i>
          </div>
        </div>
      )}
      {navExpended && <Pannel expended={navExpended} />}
      {searchExpended && <SearchPannel />}
    </>
  );
}
