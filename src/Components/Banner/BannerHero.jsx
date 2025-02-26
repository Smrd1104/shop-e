import BannerSlider from "../Banner/HeroBanner";
import img1 from "../../assets/banner/bg-1.avif"
import img2 from "../../assets/banner/bg-3.avif"
import img3 from "../../assets/banner/bg-4.avif"
import img4 from "../../assets/banner/bg-5.avif"
import img5 from "../../assets/banner/bg-6.avif"
import img6 from "../../assets/banner/bg-7.avif"
import img7 from "../../assets/banner/bg-8.avif"
import img8 from "../../assets/banner/bg-9.avif"
import img9 from "../../assets/banner/bg-10.avif"
import img10 from "../../assets/banner/bg-5.avif"


const images = [
  {
    id:1,
    images:img1,
  },
  {
    id:2,
    images:img2,
  },{
    id:3,
    images:img3,
  },{
    id:4,
    images:img4,
  },{
    id:5,
    images:img5,
  },
  {
    id:6,
    images:img6,
  },{
    id:7,
    images:img7,
  },{
    id:8,
    images:img8,
  },{
    id:9,
    images:img9,
  },{
    id:10,
    images:img10,
  },

];

export default function Home() {
  return <BannerSlider images={images} />;
}
