interface TechTabletsProps {
  skills: string[];
}

function TechTablets({ skills }: TechTabletsProps) {
  return (
    <div className="flex flex-wrap mt-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white px-2 py-1 rounded-full text-sm mr-2 mb-2"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

export default TechTablets;
