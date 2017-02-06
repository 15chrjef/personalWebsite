import React from 'react';
import { commonCentering } from '../public/Styles';
import { Row, Col, Button, Thumbnail } from 'react-bootstrap';
import PortfolioRow from './components/PortfolioRow';
const About = () => {
	return (
		<div style={{...commonCentering, fontSize: '25px'}}>
			<div style={{fontSize: '30px', fontWeight: 'bold'}}>Mobile</div>
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
			<PortfolioRow
				images={['http://bit.ly/2kbQtVn','http://bit.ly/2kDKhsH']}
				titles={['Jamz', 'Meal.Next']}
				descriptions={[
					'collaborative goal setting',
					'meal tracking meets shopping lists'
				]}
				links={['http://bit.ly/2ldMV66', 'http://bit.ly/2jSFIX4']}
			/>
			<div style={{fontSize: '30px', fontWeight: 'bold'}}>Web</div>
			<PortfolioRow
				images={['http://bit.ly/2kbwpCC','http://bit.ly/2ldRPiq']}
				titles={['PicoShell', 'Perfect Your Pair']}
				descriptions={[
					'The best way to collaboratively develop on the web',
					'Find the the best person to pair program with'
				]}
				links={['http://bit.ly/2kwZnhl', 'http://bit.ly/2ldFET2']}
			/>
			<PortfolioRow
				images={['http://bit.ly/2kc2FFD','http://unc.live/2kc1Exf']}
				titles={['PokeStore', '*Countless Games*']}
				descriptions={[
					'A fun store of all 151 pokemon',
					'Many fun web apps and games to play'
				]}
				links={['http://bit.ly/2khev3O', 'http://bit.ly/2jSLYOw']}
			/>
		</div>
	)
}


export default About;