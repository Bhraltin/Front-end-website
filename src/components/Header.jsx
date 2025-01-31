import { Link } from "react-router-dom";
export default function Header () {
    return (
        <div>
        <h1>Header</h1>
            <ul className="flex gap-4">
          <li><Link to="/" className="hover:underline">About</Link></li>
          <li><Link to="/skills" className="hover:underline">Skills</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
        </ul>
        </div>
    )
}