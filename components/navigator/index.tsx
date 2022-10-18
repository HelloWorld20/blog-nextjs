import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "@/store/actions";
import Pannel from "./pannel";

export default function Navigator() {
  const dispatch = useDispatch();

  const { navExpended } = useSelector<StoreState, appModel>(
    (state) => state.app
  );

  return (
    <>
      <div className="absolute top-10 right-10 z-10 text-xs">
        <div className="absolute right-10 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100">
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
          <i className="iconfont icon-menu" style={{ lineHeight: "22px" }}></i>
        </div>
      </div>
      {navExpended && <Pannel navExpended={navExpended} />}
    </>
  );
}
