import React from "react";

export const Todolist = ({ todoList }) => {
	return (
		<div>
			{todoList.map((item) => {
				const { id, title, description } = item;
				return (
					<article key={id}>
						<strong> Title:</strong> {title} <br />
						<strong>Description </strong>
						{description}
						<hr />
					</article>
				);
			})}
		</div>
	);
};
