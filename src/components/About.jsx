import { useContext } from "react"
import { DataContext } from "./context/DataContext"

export default function About() {
     const {data, loading, error} = useContext(DataContext);
     if (loading) {
       return <div>Loading...</div>; 
     }
     if (error) {
       return <div>Error: {error.message}</div>;
     }
     const heroSection = data.heroSection;
    return (
      <section id="about" className="p-20 flex justify-center m-5">
      <div className="container mx-auto flex flex-row items-center gap-10">
        <div className=" text-left">
          <h2 className="text-4xl font-bold">{heroSection.greeting}</h2>
          <p className="text-lg mt-4 font-bold">{heroSection.intro}</p>
        
          <div className="flex gap-4 mt-4">
            {heroSection.socials.map((social, index) => (
               <a 
               key={index} 
               href={social.link} 
               target="_blank" 
             >
              <img 
                key={index} 
                src={`/images/${social.logo}`} 
                className="w-10 h-10"
              />
              </a>
            ))}
          </div>
          <p className="text-lg mt-4">{heroSection.ctaHTML}</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src={`/images/${heroSection.profileImage}`} 
            alt="Profile" 
            className="w-70 h-70 object-cover rounded-lg shadow-lg"
          />
        </div>
    
      </div>
    </section>
    
    )
}