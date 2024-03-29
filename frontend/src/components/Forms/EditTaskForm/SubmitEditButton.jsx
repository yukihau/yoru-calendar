import React from 'react';
import { func } from 'prop-types';

function SubmitEditButton(props) {
	const { onClick } = props;
	return (
		<button
			className="editTask__finishEditBtn"
			type="button"
			onClick={ onClick }
		>
      Edit
		</button>
	);
}

SubmitEditButton.propTypes = {
	onClick: func.isRequired,
};

export default SubmitEditButton;
