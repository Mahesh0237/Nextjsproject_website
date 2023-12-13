import React from 'react'
import { Container, Divider, Grid } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
function Footer() {
    return (
        <footer className="rbt-footer footer-style-1 bg-color-white footerbg overflow-hidden" >
            <Container size={1350}>
                <div className="footer-top">
                    <Grid>
                        <Grid.Col xl={4} lg={4} md={6} sm={6} xs={12} >
                            <div className="footer-widget">
                                <div className="logo">
                                    <a href="#">
                                        <Image src="/logo.png" alt="Education Logo Images" width={100} height={100} />
                                    </a>
                                </div>
                                <p className="description mt--20">We’re always in search for talented
                                    and motivated people. Don’t be shy introduce yourself!
                                </p>
                                <ul className="social-icon social-default justify-content-start">
                                    <li><a href="https://www.facebook.com/">
                                        <IconBrandFacebook />
                                    </a>
                                    </li>
                                    <li><a href="https://www.twitter.com">
                                        <IconBrandTwitter />
                                    </a>
                                    </li>
                                    <li><a href="https://www.instagram.com/">
                                        <IconBrandInstagram />
                                    </a>
                                    </li>
                                    <li><a href="https://www.linkdin.com/">
                                        <IconBrandLinkedin />
                                    </a>
                                    </li>
                                </ul>
                                <div className="contact-btn mt--30">
                                    <a className="rbt-btn btn-border-gradient radius-round" href="#">
                                        <div className="icon-reverse-wrapper">
                                            <span className="btn-text">Contact With Us</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Grid.Col>
                        <Grid.Col xl={2} lg={2} md={6} sm={6} xs={12} >
                            <div className="footer-widget">
                                <h5 className="ft-title">Useful Links</h5>
                                <ul className="ft-link">
                                    <li>
                                        <a href="12-marketplace.html">Marketplace</a>
                                    </li>
                                    <li>
                                        <a href="04-kindergarten.html">kindergarten</a>
                                    </li>
                                    <li>
                                        <a href="13-university-classic.html">University</a>
                                    </li>
                                    <li>
                                        <a href="09-gym-coaching.html">GYM Coaching</a>
                                    </li>
                                    <li>
                                        <a href="faqs.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="about-us-01.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                        </Grid.Col>
                        <Grid.Col xl={2} lg={2} md={6} sm={6} xs={12} >
                            <div className="footer-widget">
                                <h5 className="ft-title">Our Company</h5>
                                <ul className="ft-link">
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="become-a-teacher.html">Become Teacher</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="instructor.html">Instructor</a>
                                    </li>
                                    <li>
                                        <a href="event-list.html">Events</a>
                                    </li>
                                    <li>
                                        <a href="course-filter-one-toggle.html">Course</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </Grid.Col>
                        <Grid.Col xl={4} lg={4} md={6} sm={6} xs={12} >
                            <div className="footer-widget">
                                <h5 className="ft-title">Get Contact</h5>
                                <ul className="ft-link">
                                    <li><span>Phone:</span> <a href="#">(406) 555-0120</a></li>
                                    <li><span>E-mail:</span> <a href="mailto:hr@example.com">admin@example.com</a></li>
                                </ul>
                                <div className="newsletter-form mt--20" >
                                    <h6 className="w-600">Newsletter</h6>
                                    <p className="description">2000+ Our students are subscribe Around the World. Don’t be shy introduce yourself!</p>
                                    <div className="form-group  mb--20">
                                        <label for="email">Enter Your Email Here</label>
                                        <input id="email" type="email" />
                                    </div>
                                    <div className="form-group mb--0">
                                        <button className="rbt-btn btn-gradient radius-round btn-sm" type="submit">
                                            <span data-text="Submit Now">Submit Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>
                <Divider />
                <div className="copyright-area copyright-style-1 ptb--20">
                    <Grid>
                        <Grid.Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <p className="rbt-link-hover text-center text-lg-start">Copyright © 2023 <Link href="#"> @hi Study.</Link> All Rights Reserved</p>
                        </Grid.Col>
                        <Grid.Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Subscription</a></li>
                                <li><a href="#">Login &amp; Register</a></li>
                            </ul>
                        </Grid.Col>
                    </Grid>
                </div>
            </Container>
        </footer>
    )
}

export default Footer