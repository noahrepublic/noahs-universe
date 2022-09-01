
import { Link } from "react-router-dom";

const Header = () => { 
    return (
        <header>
            <div id='navbar'> 
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                            <a href='/projects'>Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <text id='title'>Noah's Universe</text>
        </header>
    )
}

export default Header;