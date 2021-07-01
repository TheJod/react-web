import React, {Component} from 'react';
import {Link} from 'react-scroll'

class AboutNavButton extends Component {
    scrollToAbout() {
        const divElement = document.getElementById("about-content")
        divElement.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <li className="active" onClick={this.scrollToAbout}>
                <Link to="about-content" spy={true} smooth={true}>
                    <a href="">About</a>
                </Link>
            </li>
            // <li className="active" onClick={() => console.log("About is clicked!")}>About</li>
        )
    }
}

export default AboutNavButton;