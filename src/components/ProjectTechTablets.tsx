interface TechTabletsProps {
  skills: string[];
}

function TechTablets({ skills }: TechTabletsProps) {
  return (
    <div className="flex flex-wrap mt-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-black text-white px-2 py-1 rounded-full text-sm mr-2 mb-2"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

export default TechTablets;
