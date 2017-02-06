import React from 'react';
import { commonCentering } from '../public/Styles';
import { Row, Col, Button, Thumbnail } from 'react-bootstrap';
import PortfolioRow from './components/PortfolioRow';
const About = () => {
	return (
		<div style={{...commonCentering, fontSize: '25px'}}>
			<div style={{fontSize: '30px', fontWeight: 'bold'}}>Mobile</div>
			<div style={{marginTop: '30px'}}>
				<PortfolioRow
					type='mobile'
					images={['http://bit.ly/2jRca0T','http://bit.ly/2kIfWsV']}
					titles={['Mobile HackerNews', 'Countrify']}
					descriptions={[
						'HN on your phone',
						'All the information you need on any country'
					]}
					links={['http://bit.ly/2khfJvR', 'http://bit.ly/2khfJvR']}
				/>
			</div>
			<div style={{marginTop: '30px'}}>
				<PortfolioRow
					images={['http://bit.ly/2kbQtVn','http://bit.ly/2kDKhsH']}
					titles={['Jamz', 'Meal.Next']}
					descriptions={[
						'collaborative goal setting',
						'meal tracking meets shopping lists'
					]}
					links={['http://bit.ly/2ldMV66', 'http://bit.ly/2jSFIX4']}
				/>
			</div>
			<div style={{fontSize: '30px', fontWeight: 'bold'}}>Web</div>
			<div style={{marginTop: '30px'}}>
				<PortfolioRow
					images={['http://bit.ly/2kbwpCC','http://bit.ly/2kIfWsV']}
					titles={['PicoShell', 'Countrify']}
					descriptions={[
						'The best way to collaboratively develop on the web',
						''
					]}
					links={['http://bit.ly/2kwZnhl', 'http://bit.ly/2khfJvR']}
				/>
			</div>
		</div>
	)
}


export default About;