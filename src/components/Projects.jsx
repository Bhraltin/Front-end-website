
import { useContext } from "react"
import { DataContext } from "./context/DataContext"
export default function Projects () {
    const {data, loading, error} = useContext(DataContext);
    if (loading) {
      return <div>Loading...</div>; 
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    const ProjectsSection = data.ProjectsSection
    return(
        <section>
        <div className="container">
            <h2 className="font-bold text-center text-3xl mb-10 ">Projects</h2>

         <div  className="flex flex-wrap gap-8 mx-auto justify-center">
          {ProjectsSection.projects.map((project, index) => (
            <div key={index}
            className="bg-blue-200 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 ">
               <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 >{project.title}</h3>
              <p >{project.information}</p>
              <div className="flex items-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-500"
                >
                  View on GitHub
                </a>
                </div>
                </div>
          ))}
      </div>
        </div>
     </section>

    )
}