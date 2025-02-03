import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";


export default function Header () {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className="flex flex-col" >
            <div className="flex flex-row flex-row-reverse space-x-4">
         <div className="theme rounded-6">
        <button onClick={toggleTheme}>    {theme === "light" ? "Dark Mode" : "Light Mode"}</button>
        </div> 
        <div className="language">
            <button className="w-14 h-7 flex items-center rounded-full p-1 transition duration-300">Türkçe'ye Geç</button>
        </div>
        </div>
        <nav> 
                <ul className="flex flex-row list-none flex-row-reverse">
                    <li><Link to="/skills">Skills</Link></li> 
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/hireme">Hire me</Link></li>
                </ul>
            </nav>
        </div>
 )
}