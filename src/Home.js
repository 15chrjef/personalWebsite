import React from 'react';
import { commonCentering } from '../public/Styles';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
const Home = () => {
	return (
		<div style={{...commonCentering, fontSize: '25px'}}>
			<div style={{color: '#337AB7', fontWeight: 'bold', marginTop: '200px', fontSize: '35px'}}>
				I Want to Help You Kick Ass
			</div>
			<div>
				See What I can help you build
			</div>
			<span className='glyphicon glyphicon-arrow-down'></span>
			<Link to='portfolio'><Button bsSize='large'>Portfolio</Button></Link>
		</div>
	)
}
// glyphicon glyphicon-arrow-down

export default Home;