import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { GiHeartBattery, GiCoffeeMug } from 'react-icons/gi';

const FooterComponent=()=>{

    return(
        <footer>
            <Container fluid className="d-none d-md-block mb-3">
                <Row>
                    <Col md={{ span: 3, offset: 0 }} className="ml-md-5">
                        &copy;Cleancoin $
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        {/* madeWith = (<GiHeartBattery /> , <GiCoffeeMug />) =&gt; &#123;<span style={{"fontStyle": "italic"}}>The Cleancoin Team</span>&#125; */}
                        madeBy CleancoinTeam Group 2
                    </Col>
                    <Col md={{ offset: 0 }}>
                        <a href="https://www.facebook.com/"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-facebook"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537"
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg></a>
                        <a href="https://www.instagram.com/"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-instagram"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537"
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg></a>
                        <a href="https://twitter.com/csi_vesit?lang=en"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-twitter"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537"
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg></a>
                        <a href="https://www.youtube.com/"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-youtube"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537" 
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="5" width="18" height="14" rx="4" />
                            <path d="M10 9l5 3l-5 3z" />
                        </svg></a>
                        <a href="mailto:2019meet.patel@ves.ac.in"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail-forward"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537"
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                            <path d="M3 6l9 6l9 -6" />
                            <path d="M15 18h6" />
                            <path d="M18 15l3 3l-3 3" />
                        </svg></a>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="d-md-none mb-3">
                <Row>
                    <div className="mx-auto mt-1">
                        &copy;CSI - VESIT 2021
                    </div>
                </Row>
                <Row>
                    <div className="mx-auto my-3">
                        madeWith = (<GiHeartBattery /> , <GiCoffeeMug />) =&gt; &#123;<span style={{ "fontStyle": "italic" }}>The CSI Team</span>&#125;
                    </div>
                </Row>
                <Row>
                    <div className="mx-auto">
                        <a href="https://www.facebook.com/" className="mr-1"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-facebook"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537"
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg></a>
                        <a href="https://www.instagram.com/"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-instagram"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537"
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg></a>
                        <a href="https://twitter.com/" className="mx-2"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-twitter"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537"
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg></a>
                        <a href="https://www.youtube.com/"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-youtube"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537" 
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="5" width="18" height="14" rx="4" />
                            <path d="M10 9l5 3l-5 3z" />
                        </svg></a>
                        <a href="mailto:2109adwait.shirodkar@ves.ac.in" className="mx-2"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail-forward"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#363537"
                        fill="#add8e6"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                            <path d="M3 6l9 6l9 -6" />
                            <path d="M15 18h6" />
                            <path d="M18 15l3 3l-3 3" />
                        </svg></a>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent;

