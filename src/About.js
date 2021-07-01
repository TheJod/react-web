import React, {Component} from 'react';
import LOREM_IPSUM from './data/loremIpsum';

class About extends Component {
    render() {
        return (
            <div className="body">
                <h2>About</h2>
                <p>{LOREM_IPSUM}</p>
                <p>{LOREM_IPSUM}</p>
                <p>{LOREM_IPSUM}</p>
                <p>{LOREM_IPSUM}</p>
                <p>{LOREM_IPSUM}</p>
            </div>
        )
    }
}

export default About;