import React from "react";

const Alert = ({ msg, type }) => {
	return (
		<div
			className={`alert alert-${type} alert-dismissible fade show`}
			role="alert"
		>
			<strong>{msg}</strong>
			<button
				type="button"
				className="close"
				data-dismiss="alert"
				aria-label="Close"
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};

export default Alert;
