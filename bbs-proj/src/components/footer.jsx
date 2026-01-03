
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return(
        <footer className="footer">
        <div className="container">
            <div className="footer-nav">
                <Link to="/Contact" target="_blank">Contact</Link>
                <Link to="/About" target="_blank">About</Link>
                <Link to="/Productspage" target="_blank">Shop</Link>
                <Link to="https://www.instagram.com/berylbluestudio/" target="_blank">
                    <img src="/images/instagram icon.svg" width="20" height="20"/>
                    Instagram
                </Link>
                <Link to="https://www.pinterest.com/syeda_maryam_a/" target="_blank">
                    <img src="/images/Pinterest icon.svg" width="20" height="20"/>
                    Pinterest
                </Link>
            </div>
            <div className="footer-logo">
                <img src="/images/logo.svg" width="507" height="107"/>
                <p>Since 2021</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;