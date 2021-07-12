import React, {Component} from 'react';
import {Link} from 'react-scroll';
import CONTENT_ELEMENTS from "./data/contents";

class HeadNavButtons extends Component {
    scrollToContent(elemId) {
        const divElement = document.getElementById(elemId)
        if (divElement) divElement.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <nav>
                <ul className="header masthead-nav">
                    <li className="active" onClick={this.scrollToContent(CONTENT_ELEMENTS.ABOUT)}>
                        <Link to={CONTENT_ELEMENTS.ABOUT} spy={true} smooth={true}>
                            <a href="#">About</a>
                        </Link>
                    </li>
                    <li className="active" onClick={this.scrollToContent(CONTENT_ELEMENTS.ROADMAP)}>
                        <Link to={CONTENT_ELEMENTS.ROADMAP} spy={true} smooth={true}>
                            <a href="#">Roadmap</a>
                        </Link>
                    </li>
                    <li className="active" onClick={this.scrollToContent(CONTENT_ELEMENTS.SOCIAL_PROFILES)}>
                        <Link to={CONTENT_ELEMENTS.SOCIAL_PROFILES} spy={true} smooth={true}>
                            <a href="#">Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default HeadNavButtons;