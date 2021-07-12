import React, {Component} from 'react';
import SocialProfiles from './SocialProfiles';
import About from './About';
import HeadNavButtons from './HeadNavButtons';
import RoadMap from "./RoadMap";
import BrandName from "./BrandName";

class App extends Component {
    state = {displayBio: false};

    toggleDisplayReadAboutUs = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {

        return (
            <div className="site-wrapper">
                <div className="container head-container">
                    <div className="masthead">
                        <BrandName />
                        <HeadNavButtons />
                    </div>
                </div>
             
                <div className="container content-container">

                    <div className="mastbody">
                        <About />
                    </div>

                    <div className="mastbody">
                        <RoadMap />
                    </div>

                    <div className="mastbody">
                        <SocialProfiles />
                    </div>

                    <div className="mastfoot">
                        <p>Copyright © 2021 GuyBiz & Co.</p>
                    </div>

                </div>
            </div>
        )
    }
}

/* 
{
this.state.displayBio? (
    <div>
        <p>We have lots of cakes. But we also serve coffee, tea, drinks, frappe, spaghetti, salads and more!</p>
        <p>Our store is inside Caltex gas station on Ekkachai Rd. (near Soi Ekkachai 129)</p>
        <button onClick={this.toggleDisplayReadAboutUs}>Show Less</button>
    </div>
) : (
    <div>
        <button onClick={this.toggleDisplayReadAboutUs}>About Us</button>
    </div>
)
}
*/

export default App;