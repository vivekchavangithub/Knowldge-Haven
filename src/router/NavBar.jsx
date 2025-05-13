import { Link, NavLink } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Logo from "./Logo"
import SearchBox from "./SearchBox"

const NavBar = () => {
    return (
        <div id="Nav1">
            <Logo/>
            <div className="searchBox">
                <SearchBox/>
            </div>
            <div className="links">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>

    )
}

export default NavBar

//  {/* <Link to="/" ><Home /></Link>
//             <Link to="/about" ><About /></Link>
//             <Link to="/contact" ><Contact /></Link> */}

//                     {/* <div id={styles.link}> */}

//              {/* <a href="/"><Home/></a>
// <a href="/about"><About/></a>
// <a href="/contact"><Contact/></a> */}{/* </div> */}