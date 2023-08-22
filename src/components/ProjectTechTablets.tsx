interface TechTabletsProps {
  skills: string[];
}

function TechTablets({ skills }: TechTabletsProps) {
  return (
    <div className="flex flex-wrap mt-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-purple-900 to-indigo-500 text-white px-2 py-1 rounded-full text-sm mr-2 mb-2"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

export default TechTablets;
