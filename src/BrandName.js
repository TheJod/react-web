import React, {Component} from 'react';
import LOGOS from "./data/logos";

class BrandName extends Component {
    render() {
        let logo = LOGOS.find(_ => _.name === 'brand-logo')
        return (
            <div className='masthead-brand'>
                <img className='masthead-brand-logo'
                    src={logo.image}
                    alt={logo.name}
                    style={{ height: 50}}
                />
                <h1 className='header masthead-brand-name'>BETSWAP</h1>
            </div>
        )
    }
}

export default BrandName;