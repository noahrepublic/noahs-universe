
import { Link } from "react-router-dom";

const Header = () => { 
    return (
        <header>
            <div id='navbar'> 
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/projects'>Projects</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <text id='title'>Noah's Universe</text>
        </header>
    )
}

export default Header;