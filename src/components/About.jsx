import data from "../data.json"

export default function About() {
 const {heroSection} = data.en 
    return (
  <section id="about" className="p-10 bg-white dark:bg-gray-900">
  <div>
  <h1>{heroSection.greeting}</h1>
  <p>{heroSection.intro}</p>
  </div>
  <div>

  
  </div>
    </section>
    )
}