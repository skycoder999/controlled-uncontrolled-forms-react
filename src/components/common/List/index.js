import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const List = ({ listdata, listname }) => {
	const onEdit = (e) => {
		e.preventDefault();
	};

	const onDelete = (id) => {
		return listdata.filter((item) => item.id !== id);
	};

	const renderListData = listdata.map((item) => {
		const { id, title, description } = item;
		return (
			<div style={{ padding: "40px", border: "1px solid #efefef" }}>
				<article key={id}>
					<strong> Title:</strong> {title} <br />
					<strong>Description </strong>
					{description}
					<div className="btn-container">
						<button type="button" className="edit-btn" onClick={() => onEdit}>
							<FaEdit />
						</button>
						<button
							type="button"
							className="delete-btn"
							onClick={() => onDelete}
						>
							<FaTrash />
						</button>
					</div>
				</article>
			</div>
		);
	});

	return (
		<>
			<h4 className="heading" style={{ color: "#3e11bb" }}>
				{listname} from localStorage:{" "}
			</h4>
			{renderListData}
		</>
	);
};
