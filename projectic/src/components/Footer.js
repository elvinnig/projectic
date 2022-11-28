import footer from '../assets/logo/footer-logo.png'

const Footer = () => {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center my-2 border-top">
                <p class="col-md-4 mb-0 text-muted">&copy; 2022 Projectic</p>
                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img alt='footer logo' src={footer} height='50'/>
                </a>
                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="#/" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="#landing" class="nav-link px-2 text-muted">Why Projectic</a></li>
                    <li class="nav-item"><a href="#features" class="nav-link px-2 text-muted">Features</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link px-2 text-muted">Contact Us</a></li>
                </ul>
  </footer>
</div>
    )
}

export default Footer;