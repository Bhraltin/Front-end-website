
import { Link } from "react-router-dom";
import { useContext } from "react"
import { DataContext } from "./context/DataContext"
export default function Footer() {
  const {data, loading, error} = useContext(DataContext);
     if (loading) {
       return <div>Loading...</div>; 
     }
     if (error) {
       return <div>Error: {error.message}</div>;
     }
     const footer = data.footer
    return (
      <footer>
        <div>
          <h2 className="font-bold justify-center flex">{footer.text}</h2>
        </div>
        <div className="flex justify-center gap-4">
        {footer.socials.map((social, key) => (
          <a
            key={key}
            href={social.link}
            target="_blank"
            className="text-blue-500"
          >
            {social.name}
          </a>
        ))}
      </div>
    <div>
     
    </div>
      </footer>
    );
  }
