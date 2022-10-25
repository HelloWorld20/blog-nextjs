import { useEffect, useState } from "react";

const config = require('../../config.json')

let covers = config.cover;

covers = covers.map(cover => require(`../../public/assets/imgs/_cover/${cover}`));

export function useRandomCover() {
  const [cover, setCover] = useState(covers[0]);
  useEffect(() => {
    const len = covers.length;

    const index = Math.floor(Math.random() * len);

    // const cover = covers[index].default.src
    setCover(covers[index])
  }, [])

  return cover;
}
