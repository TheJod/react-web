import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';
import CONTENT_ELEMENTS from "./data/contentElements";

class SocialProfile extends Component {
    render() {
        const { link, image } = this.props.socialProfile;
        return (
            <span>
                <a href={link}><img src={image} alt={CONTENT_ELEMENTS.SOCIAL_PROFILES} style={{ width: 35, height: 35, margin: 10 }}/></a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div className="body" id={CONTENT_ELEMENTS.SOCIAL_PROFILES}>
                <h2>Contact Us</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map( profile => {
                            return <SocialProfile key={profile.id} socialProfile={profile}/>;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;