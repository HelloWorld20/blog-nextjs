import { useEffect } from "react";
import "highlight.js/styles/vs2015.css"; // github样式文件
import hljs from "highlight.js/lib/common"; // highlight.js核心

export default function useHightLight() {
  useEffect(() => {
    hljs.highlightAll();  // 高亮所有'pre code'
  }, [])
}