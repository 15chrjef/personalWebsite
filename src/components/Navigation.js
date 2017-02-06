import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
export default class Navigation extends Component {
  constructor(props) {
		super(props)
		this.state = {
			activeKey: 1
		}
	}
	handleSelect(i) {
		event.preventDefault()
		this.setState({ activeKey: i })
	}
	render() {
		const location = window.location.pathname.slice(1);
		const { activeKey } = this.state;
		return (
      <Nav 
				bsStyle='tabs' 
				onSelect={this.handleSelect.bind(this)}
			>
				<NavItem 
					style={{width: '20%', fontSize: '20px'}}
					active={''=== location}
					eventKey='1'
				>
					<Link to='/'>Home</Link>
				</NavItem>
				<NavItem 
					style={{width: '20%', fontSize: '20px'}}
					eventKey='2'
					active={'portfolio' === location}
				>
					<Link to='portfolio'>Portfolio</Link>
				</NavItem>
				<NavItem 
					style={{width: '20%', fontSize: '20px'}}
					active={'contact' === location}
					eventKey='3'
				>
					<Link to='contact'>Contact</Link>
				</NavItem>
			</Nav>
  	);
	}
}

