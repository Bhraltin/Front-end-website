import data from "../data.json"
export default function Skills () {
    const { skillsSection } = data.en;
    
    return (
     <div className="flex flex-column justify-center">
     <h2>{skillsSection.title}</h2>
      <ul className="flex flex-row list-none">
      {skillsSection.skills.map((skill, index) => (
          <li key={index}>
            <img src={`/icons/${skill.icon}`} alt={skill.name} />
            {skill.name}
          </li>
        ))}
      </ul>
    
        </div>
    )
}