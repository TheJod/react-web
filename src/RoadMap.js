import React, {Component} from 'react';
import ILLUSTRATIONS from "./data/illustrations";
import CONTENT_ELEMENTS from "./data/contentElements";

class RoadMap extends Component {

    render() {
        return (
            <div className="body" id={CONTENT_ELEMENTS.ROADMAP}>
                <h2>RoadMap</h2>
                <span>
                    <img
                        alt='roadmap-illustration'
                        style={{ width: 1200, margin: 10 }}
                        src={ILLUSTRATIONS.find(elem => elem.name === 'roadmap').image}/>
                </span>
            </div>
        )
    }
}

export default RoadMap;