// import Cart from "./Cart";
// import Logo from "./Logo";
// import Manubar from "./ManuBar";
// import { Serchbox } from "./SearchBox"
// import './nav.css'

const Nav = ()=>{
    return(
        // <div id = "navbar">
        //     <Logo/>
        //     <Serchbox/>
        //     <Cart/>
        //     <Manubar/>
        // </div>
        // <nav classNameNameName="navbar navbar-expand-lg bg-body-tertiary">
        // <div classNameNameName="container-fluid">
        //     <a classNameNameName="navbar-brand" href="#">Navbar scroll</a>
        //     <button classNameNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        //     <span classNameNameName="navbar-toggler-icon"></span>
        //     </button>
        //     <div classNameNameName="collapse navbar-collapse" id="navbarScroll">
        //     <ul classNameNameName="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        //         <li classNameNameName="nav-item">
        //         <a classNameNameName="nav-link active" aria-current="page" href="#">Home</a>
        //         </li>
        //         <li classNameNameName="nav-item">
        //         <a classNameNameName="nav-link" href="#">Link</a>
        //         </li>
        //         <li classNameNameName="nav-item dropdown">
        //         <a classNameNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //             Link
        //         </a>
        //         <ul classNameNameName="dropdown-menu">
        //             <li><a classNameNameName="dropdown-item" href="#">Action</a></li>
        //             <li><a classNameNameName="dropdown-item" href="#">Another action</a></li>
        //             <li><hr classNameNameName="dropdown-divider"/></li>
        //             <li><a classNameNameName="dropdown-item" href="#">Something else here</a></li>
        //         </ul>
        //         </li>
        //         <li classNameNameName="nav-item">
        //         <a classNameNameName="nav-link disabled" aria-disabled="true">Link</a>
        //         </li>
        //         </ul>
        //     <form classNameNameName="d-flex" role="search">
        //         <input classNameNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //         <button classNameNameName="btn btn-outline-success" type="submit">Search</button>
        //     </form>
        //     </div>
        // </div>
        // </nav>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">QSpiders</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Product</a></li>
                    <li><a className="dropdown-item" href="#">Cart</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            
            </div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
    )
};

export default Nav;