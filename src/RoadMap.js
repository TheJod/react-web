import React, {Component} from 'react';
import ILLUSTRATIONS from "./data/illustrations";

class RoadMap extends Component {

    render() {
        let illusName = 'roadmap-illustration';
        return (
            <div className="body" id="roadmap-content">
                <h2>RoadMap</h2>
                <span>
                    <img
                        alt={illusName}
                        style={{ width: 1200, /*height: 35,*/ margin: 10 }}
                        src={ILLUSTRATIONS.find(elem => elem.name === illusName).image}/>
                </span>
            </div>
        )
    }
}

export default RoadMap;