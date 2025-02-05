import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";



export default function Header () {
    const {theme, toggle} = useContext(ThemeContext)
    return (
        <div className="flex flex-col" >
            <div className="flex flex-row-reverse"> 
<button onClick={toggle}>{theme ? <FaToggleOn/> : <FaToggleOff/>} </button>
        <div className="language">
          <button>language</button>
        </div>
        </div>

        <nav> 
                <ul className="flex flex-row list-none flex-row-reverse gap-5">
                    <li><Link to="/skills">Skills</Link></li> 
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/hireme">Hire me</Link></li>
                </ul>
            </nav>
        </div>
 )
}