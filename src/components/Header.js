import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {Icon} from 'react-fa';



class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showFaqModal: false,
			showSupportModal: false
		};
	}

	componentDidMount() {
		let hash = window.location.hash;
		if (hash && hash !== '') {
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
				        		<img alt="nasdaq logo"src="/img/nasdaqLogo.png" />
				                <h1 className="header-text">E<span className="text-nasdaqBlue">X</span>CHANGE</h1>
							</div>
				      	</Link>
				    </div>
				</div>
			</div>
	    );
	}
}

export default Header;
