import BallCanvas from "../components/models/tech_logos/Ball";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icons={[technology.icon]} />
        </div>
      ))}
    </div>
  );
};

export default Tech;