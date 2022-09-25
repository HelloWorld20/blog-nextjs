const config = require('../../config.json')

let covers = config.cover;

covers = covers.map(cover => require(`../../public/assets/imgs/_cover/${cover}`));

export default function getRandmeCover() {
  const len = covers.length;

  const index = Math.floor(Math.random() * len);
  return covers[index];
}
