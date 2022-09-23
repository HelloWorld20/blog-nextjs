
import coverImage from '../_posts/assets/img/Snipaste_2021-05-23_17-53-28.png';
import coverImage2 from './cover2.jpg'

export default function getRandmeCover() {
  const index = Math.floor(Math.random() * 2);
  return [coverImage, coverImage2][index]
}
