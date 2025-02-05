import { useContext } from "react"
import { DataContext } from "./context/DataContext"

export default function Skills () {
    const {data, loading, error} = useContext(DataContext);
    if (loading) {
      return <div>Loading...</div>; 
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
   const skillsSection = data.skillsSection;
    return (
     <div className="flex flex-col justify-center bg-white gap-8 p-10">
     <h2 className="font-bold text-4xl">{skillsSection.title}</h2>
      <ul className="flex flex-row justify-center list-none gap-5">
      {skillsSection.skills.map((skill, index) => (
          <li key={index}>
            <img src={`/images/${skill.icon}`} alt={skill.name} />
            {skill.name}
          </li>
        ))}
      </ul>
    
        </div>
    )
}