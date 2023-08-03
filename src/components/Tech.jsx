import { technologies } from "../constants/constant";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-28 h-28"
          title={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
