import React from 'react';
import { FaGithub } from 'react-icons/fa';



function Footer() {
    return (
            <div className="footer">
                <footer>
                        <a href="https://github.com/Fabitheguy003" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaGithub />
                            </li>
                        </a>
                </footer>
            </div>
        );
    }

export default Footer;