import { useState } from "react";
import Gallery from "../components/Gallery";
import Slider from "../components/Slider";
import Tablist from "../components/Tablist";

const tablist = [
  { id: 1, name: "Live" },
  { id: 2, name: "Slot" },
  { id: 3, name: "Sports" },
  { id: 4, name: "Lottery" },
  { id: 5, name: "All" },
  { id: 6, name: "Promo" },
];

const gallerylist = [
  { id: 1, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 2, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 3, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 4, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 5, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 6, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 7, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 8, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 9, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 10, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 11, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 12, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 13, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 14, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 15, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 16, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 17, imgurl: "/images/game01.jpg", title: "M365" },
  { id: 18, imgurl: "/images/game01.jpg", title: "M365" },
];

const Home = () => {
  const [tabNum, setTabNum] = useState(1);

  return (
    <div className="home-container py-80">
      <Slider />
      <Tablist tablist={tablist} tabNum={tabNum} setTabNum={setTabNum} />
      <Gallery gallerylist={gallerylist} />
    </div>
  );
};

export default Home;
