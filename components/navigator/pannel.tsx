import { toggleNav } from "@/store/actions";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Hitokoto from "../hitokoto";

const label = [
  { name: "首页" },
  { name: "标签", url: "/tags" },
  { name: "归档", url: "/archives" },
  { name: "收藏", url: "/collect" },
  { name: "关于" },
];

export default function Pannel({ expended }) {
  const dispatch = useDispatch();
  return (
    <div className="relative w-screen h-screen bg-gray-50 bg-opacity-95 z-10">
      <div className="absolute top-10 right-10 z-20 text-xs">
        <div
          className="absolute right-0 bg-gray-50 p-1.5 rounded-sm cursor-pointer hover:bg-gray-100"
          onClick={() => {
            dispatch(toggleNav(!expended));
          }}
        >
          <i className="iconfont icon-close" style={{ lineHeight: "22px" }}></i>
        </div>
      </div>
      <ul className="pt-36 flex justify-center text-lg text-gray-500 space-x-8">
        {label.map(({ name, url }) => (
          <li key={name}>
            <Link href={url || "#"}>
              <a
                href={url || "#"}
                onClick={() => dispatch(toggleNav(false))}
                className="cursor-pointer hover:text-gray-800"
              >
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
  );
}
