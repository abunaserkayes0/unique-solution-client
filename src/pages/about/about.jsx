import { FileArchive, FlagIcon, Flashlight } from "lucide-react";
import Team from "../../components/ui/team/team";
import { teamMembers } from "../../../public/teamMembers";
import { coreValues } from "../../../public/coreValues";
import MissionContent from "../../components/ui/misson/missionContent";
const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">About Us</h1>
        <p className="text-lg">
          Empowering businesses with specialized consultancy and innovative
          solutions.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <MissionContent
          title="Our Mission"
          description=" We provide specialized consultancy and innovative solutions that
            empower businesses across industries. Our goal is to deliver
            sustainable results, increase efficiency, and build long-lasting
            relationships."
          icon={<Flashlight className="text-5xl mb-4" />}
        />

        <MissionContent
          title="Our Vision"
          description="We envision a world where businesses are empowered to reach their full potential through specialized consultancy and innovative solutions. Our goal is to be the leading consultancy firm that delivers sustainable results and builds long-lasting relationships."
          icon={<FlagIcon className="text-5xl mb-4" />}
        />
      </div>

      {/* Core Values Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center  mb-6">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues?.map((value, index) => (
            <div key={index} className="p-4 card shadow-md hover:shadow-lg hover:shadow-neutral-700 hover:transform hover:-translate-y-3 transition-transform text-center">
              <FileArchive className=" text-4xl mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center  mb-6">Meet the Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers?.map((member, index) => (
            <Team key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
