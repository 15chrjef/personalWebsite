import React from 'react';
import { Row, Col, Button, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router';

const PortfolioRow = (props) => {
	const { links, type, images, titles, descriptions } = props
	let button;
	if(type === 'mobile') {
		button = 'See in App Store'
	} else {
		button = 'See on Github'
	}
	return (
		<div style={{marginTop: '30px'}}>
			<Row>
				<Col xs={6}>
					<Thumbnail src={images[0]} alt="484x400">
						<h3>{titles[0]}</h3>
						<p>{descriptions[0]}</p>
						<p>
							<a href={links[0]}>
								<Button bsStyle="primary">
									{button}
								</Button>
							</a>
						</p>
					</Thumbnail>
				</Col>
				<Col xs={6}>
					<Thumbnail src={images[1]} alt="484x400">
						<h3>{titles[1]}</h3>
						<p>{descriptions[1]}</p>
						<p>
							<a href={links[1]}>
								<Button bsStyle="primary">
									{button}
								</Button>
							</a>
						</p>
					</Thumbnail>
				</Col>
			</Row>
		</div>
	)
}

export default PortfolioRow