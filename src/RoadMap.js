import React, {Component} from 'react';
import ILLUSTRATIONS from "./data/illustrations";
import CONTENT_ELEMENTS from "./data/contents";

class RoadMap extends Component {

    render() {
        return (
            <div className="body" id={CONTENT_ELEMENTS.ROADMAP}>
                <h2>RoadMap</h2>
                <span>
                    <img className='image-illus'
                        alt='roadmap-illustration'
                        src={ILLUSTRATIONS.find(elem => elem.name === 'roadmap').image}/>
                </span>
            </div>
        )
    }
}

export default RoadMap;