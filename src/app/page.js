"use client"
import ReviewComponent from "./about/ReviewComponent";
import BannerSlider from "./home-page-components/BannerSlider";
import BestSelling from "./home-page-components/BestSelling";
import ChairCollection from "./home-page-components/ChairCollection";
import FeaturedComponent from "./home-page-components/FeaturedComponent";
import NewCoolection from "./home-page-components/NewCoolection";
import Policies from "./home-page-components/Policies";

 
export default function Home() {
  return (
    <div>
    <BannerSlider />
    <ChairCollection />
    <FeaturedComponent/>
    <NewCoolection />
    <BestSelling />
    <Policies />
    <ReviewComponent />
    </div>
  );
}
