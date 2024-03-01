import Team from "../team/parts/Team";
import PartOnePr from "./projects_Parts/PartOnePr";
import PartTwoPr from "./projects_Parts/PartTwoPr";

export default function Projects() {
  return (
    <div className="w-full flex justify-center flex-wrap">
      <div className="w-full flex justify-center p-24 max-[450px]:px-5">
        <PartOnePr />
      </div>
      <div className="w-full flex justify-center p-24 max-[500px]:px-5 bg-gradient-to-r from-[#bde3ff] to-[#91b0ff]">
        <PartTwoPr />
      </div>
      <div className="w-full flex justify-center p-24 max-[600px]:px-5">
        <Team />
      </div>
    </div>
  );
}
