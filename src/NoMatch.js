import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router';
const NoMatch = () => {
	return (
		<div>
			<div className='static-modal'>
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Modal Title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Whoops it looks you like you found an empty webpage
					</Modal.Body>
					<Modal.Footer>
						<Link to='/'>please try a different url</Link>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		</div>
	)
}

export default NoMatch;