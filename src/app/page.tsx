import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "inTheGleam",
  description:
    "Accueil : inTheGleam - Freelancers - Développement Web & Web Mobile",
};

export default function Home() {
  return (
    <main className="">
      <div className=" h-[100vh]">
        <HomeSection1 />
      </div>
      <HomeSection2 />
      <div className=" mt-12 lg:mt-20">
        <HomeSection3 />
      </div>
      <div className=" mt-12">
        <HomeSection4 />
      </div>
    </main>
  );
}
