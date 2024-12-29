import Hero from "@/components/hero";
import { FC } from "react";
import homeImg from "../../public/Hadrian-article-800x445.png";

const Home: FC = () => {
  return <Hero imgAlt="Factory" imgData={homeImg} title="Profesional Cloud Hosting" />;
};

export default Home;
