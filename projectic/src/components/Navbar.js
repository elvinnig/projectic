import nav_logo from "../assets/logo/nav-logo.png"

const Navbar = () => {
    return (
        <header class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                {/*Left Logo */}
                <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img alt="navbar-logo" src={nav_logo} width="200" />
                </a>
                {/* Middle Navigation */}
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#?" class="nav-link px-5 link-dark">Why Projectic</a></li>
                    <li><a href="#?" class="nav-link px-5 link-dark">Features</a></li>
                    <li><a href="#?" class="nav-link px-5 link-dark">Contact Us</a></li>
                </ul>
                {/* Right Navigation */}
                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button type="button" class="btn btn-primary me-2">Register</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;