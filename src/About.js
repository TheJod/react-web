import React, {Component} from 'react';
import LOREM_IPSUM from './data/loremIpsum';
import CONTENT_ELEMENTS from "./data/contents";

class About extends Component {
    render() {
        return (
            <div className="body" id={CONTENT_ELEMENTS.ABOUT}>
                <h2>About</h2>
                <p>{LOREM_IPSUM}</p>
            </div>
        )
    }
}

export default About;