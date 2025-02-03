
import data from "../data.json"
export default function Projects () {
    const {ProjectsSection} = data.en
    return(
     <section>
        <div>
            <h2>Projects</h2>
            <ul>
          {ProjectsSection.projects.map((project, index) => (
            <li key={index}>
              <h3 >{project.title}</h3>
              <p >{project.information}</p>
            </li>
          ))}
        </ul>

        
        </div>
     </section>
    )
}