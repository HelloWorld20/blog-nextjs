import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { toggleNav } from "@/store/actions";
import Hitokoto from "../hitokoto";

const label = [
  { name: "首页" },
  { name: "标签", url: "/tags" },
  { name: "归档", url: '/archives' },
  { name: "收藏" },
  { name: "关于" },
];

export default function Navigator() {
  const dispatch = useDispatch();

  const { navEdpended } = useSelector<StoreState, appModel>(
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
            dispatch(toggleNav(!navEdpended));
          }}
        >
          <i className="iconfont icon-menu" style={{ lineHeight: "22px" }}></i>
        </div>
      </div>
      {navEdpended && (
        <div className="w-screen h-screen bg-gray-50 bg-opacity-25">
          <div className="absolute top-10 right-10 z-20 text-xs">
            <div className="absolute right-10 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100">
              <i
                className="iconfont icon-search"
                style={{ lineHeight: "22px" }}
              ></i>
            </div>
            <div
              className="absolute right-0 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100"
              onClick={() => {
                dispatch(toggleNav(!navEdpended));
              }}
            >
              <i
                className="iconfont icon-close"
                style={{ lineHeight: "22px" }}
              ></i>
            </div>
          </div>
          <ul className="pt-36 flex justify-center text-lg text-gray-500 space-x-8">
            {label.map(({ name, url }) => (
              <li key={name}>
                <Link href={url || '#'} onClick={() => dispatch(toggleNav(false))}>
                  <a href={url || '#'} className="cursor-pointer hover:text-gray-800">
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center text-sm text-gray-400 mt-20">
            <Hitokoto />
          </div>
        </div>
      )}
    </>
  );
}



