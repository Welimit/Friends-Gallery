

import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    We Tie Until We Die
                </p>
                <p className="footer-subscription-text">
                    You Can Buy MONEY,But You Can't Buy FRIENDS.
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input"
                                type="mail"
                                name="name"
                                placeholder="Your Mail" />
                            <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How Its Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link> 
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How Its Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link> 
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How Its Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link> 
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How Its Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link> 
                    </div>
                </div>
            </div>
            <secton className="social-media">
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>We © 2020</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to='/'
                            target="_blank"
                            aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram"
                            to='/'
                            target="_blank"
                            aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link 
                            className="social-icon-link Youtube"
                            to='/'
                            target="_blank"
                            aria-label='Youtube'>
                            <i className='fab fa-youtube'></i>
                        </Link>
                    </div>
                </div>
            </secton>
        </div>
    )
}

export default Footer 