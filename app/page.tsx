import Image from "next/image";
import Hero from "./components/Hero";
import Speciality from "./components/Speciality";
import Featured from "./components/Featured";
import Review from "./components/Review";
import HotDeal from "./components/HotDeal";
import Food from "./components/Food";
import Reservation from "./components/Reservation";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div>
      <Hero />
      <Speciality />
      <Featured />
      <HotDeal />
      <Food />
      <Stats />
      <Reservation />
      <Review />
    </div>
  );
}
