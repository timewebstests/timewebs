import Image from "next/image";
import Link from "next/link";
import Center from "@/components/center/Center";
import Projects from "@/components/projects/Projects";
import ExtraPartOne from "@/components/extra/ExtraPartOne";
import TeamDefault from "@/components/team/TeamDefaut";
import Abilities from "@/components/abilities/Abilities";
import Clients from "@/components/clients/Clients";
import Infos from "@/components/infos/Infos";
import Header from "@/components/header/HeaderBase";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center w-full p-0 bg-[#ffffff]">
      <Header home="text-blue-600" products="text-gray-600" />
      <Center />
      <Clients />
      <Projects />
      <ExtraPartOne />
      <TeamDefault />
      <Abilities />
      <Infos />
    </main>
  );
}
