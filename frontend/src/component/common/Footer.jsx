import React from 'react';

const FooterComponent = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content about">
                
                    <h2>About Us</h2>
                    <p>SkyLight Hotel is a premier destination for luxury and comfort. We offer the best services to make your stay memorable.</p>
                </div>
                <div className="footer-center contact">
                    <h2>Contact Us</h2>
                    <p>Email: info@skylighthotel.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-center social">
                    <h2>Follow Us</h2>
                    <ul class="social-links">
                        <li><a href="https://www.facebook.com/etskylight" >Facebook</a></li>
                        <li><a href="https://www.instagram.com/etskylight" >Instagram</a></li>
                        <li><a href="https://www.twitter.com/etskylight" >Twitter</a></li>
                    </ul>
                </div>
                </div>    
                <div className="footer-bottom">
                    <span className="my-footer">
                        SkyLight Hotel | All Rights Reserved &copy; {new Date().getFullYear()}
                    </span>
                </div>
            
        </footer>
    );
};

export default FooterComponent;