import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        console.log('SocialProfile this.props ->', this.props);
        const { link, image } = this.props.socialProfile;
        return (
            <span>
                <a href={link}><img src={image} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }}/></a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div className="body">
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