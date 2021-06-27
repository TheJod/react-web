import React, {Component} from 'react';
import About from './About';
import SocialProfiles from './SocialProfiles';

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
                            <h1 className='header masthead-brand'>LATTEnomic</h1>
                            <nav>
                                <ul className="header masthead-nav">
                                    <li className="active"><a href="#">About</a></li>
                                    <li><a href="#">Roadmap</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                    </div>
                </div>
             
                <div className="container content-container">
                    <div className="mastbody">
                        <p>Body 1</p>
                    </div>
                    <div className="mastbody">
                        <p>Body 2</p>
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