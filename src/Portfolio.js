import React from 'react';
import { commonCentering } from '../public/Styles'
import { Row, Col, Button, Thumbnail } from 'react-bootstrap';
const About = () => {
	return (
		<div style={{...commonCentering, fontSize: '25px'}}>
			<div>Mobile</div>
			<div>
				<Row>
					<Col xs={6} xl={6} style={{padding: '15px'}}>
						<Thumbnail src="http://bit.ly/2jRca0T" alt="484x400">
							<h3>Thumbnail label</h3>
							<p>Description</p>
							<p>
								<Button bsStyle="primary">Button</Button>&nbsp;
								<Button bsStyle="default">Button</Button>
							</p>
						</Thumbnail>
					</Col>
					<Col xs={6} xl={6}>
						<Thumbnail src="http://bit.ly/2jRca0T" alt="484x400">
							<h3>Thumbnail label</h3>
							<p>Description</p>
							<p>
								<Button bsStyle="primary">Button</Button>&nbsp;
								<Button bsStyle="default">Button</Button>
							</p>
						</Thumbnail>
					</Col>
				</Row>
			</div>
			<div>
				Web
			</div>
		</div>
	)
}

export default About;