import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section id="credentials" className="w-full">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
