import React from 'react';

import footerStyles from './footer.module.scss';

const Footer = () => {
    return (
    <footer className={footerStyles.footer}>
        {/* <div className={footerStyles.text}>
            <p>
            Wing It! is part of the Delivery Hero Concepts family -  find out more about us here.
            </p>
        </div> */}
        <ul>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Become a Partner</li>
        </ul>
    </footer>
    )
}

export default Footer