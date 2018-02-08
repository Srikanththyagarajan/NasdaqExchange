import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {Icon} from 'react-fa';
import scrollToElement from 'scroll-to-element';

import FAQ from './FAQ';
import Support from './Support';


class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showFaqModal: false,
			showSupportModal: false
		}
	}

	componentDidMount() {
		let hash = window.location.hash;
		if (hash && hash != '') {
			hash = hash.replace('#', '');

			let el = document.getElementById(hash);
			if (el) el.scrollIntoView(); 
		}
	}

	render() {
	    return (
	    	<div id="header">
				<div className="container">
				    <div className="col-md-offset-5">

				    	<Link to="/">
				        	<div className="logo-container">
				        		<img src="/img/nasdaqLogo.png" />
				                <h1 className="header-text">E<span className="text-nasdaqBlue">X</span>CHANGE</h1>
							</div>
				      	</Link>
				    </div>
				    <FAQ show={this.state.showFaqModal} onClose={() => this.setState({showFaqModal: false})} />
				    <Support show={this.state.showSupportModal} onClose={() => this.setState({showSupportModal: false})} />
				</div>
			</div>
	    );
	}
}

export default Header;
