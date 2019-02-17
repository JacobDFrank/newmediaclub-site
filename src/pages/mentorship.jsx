import React, { Component } from 'react'
import Link from 'gatsby-link'

import Mentors from '../components/Mentors'
import Email from '../components/Email'
import About from '../components/About'
import Navigation from '../components/Navigation'

import MetaTags from 'react-meta-tags'

export default class MentorshipPage extends Component {
	render() {

		return (
			<div>
				<MetaTags>
					<title>Mentorship</title>
				</MetaTags>
				<Navigation page={'mentorship'} />
				<div className="wrapContainer">
				<div className="container">
					<div className="headingContainer">
						<div className="pageHeading">Make Some Friends!</div>
						<div className="pageDescription">See who our fabulous mentors are as well as learn about our extensive alumni network.</div>
					</div>
				</div>
				<Mentors />
			</div>
		</div>
		)
	}
}