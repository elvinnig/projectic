import footer from '../assets/logo/projectic-logo-small-black.png'

const Footer = () => {
    return (
        <div className='container border-top'>
            <footer className='d-flex flex-wrap justify-content-between align-items-center my-3  '>
                <p className='col-md-4 mb-0 text-muted'>&copy; 2022 Projectic</p>
                <a href='http://localhost:3000/' className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
                    <img alt='footer logo' src={footer} height='50'/>
                </a>
                <ul className='nav col-md-4 justify-content-end'>
                    <li className='nav-item'><a href='http://localhost:3000/' className='nav-link px-2 text-muted'>Home</a></li>
                    <li className='nav-item'><a href='http://localhost:3000/#landing' className='nav-link px-2 text-muted'>Why Projectic</a></li>
                    <li className='nav-item'><a href='http://localhost:3000/#features' className='nav-link px-2 text-muted'>Features</a></li>
                    <li className='nav-item'><a href='http://localhost:3000/about_us' className='nav-link px-2 text-muted'>About Us</a></li>
                    <li className='nav-item'><a href='http://localhost:3000/#contact' className='nav-link px-2 text-muted'>Contact Us</a></li>
                </ul>
  </footer>
</div>
    )
}

export default Footer;