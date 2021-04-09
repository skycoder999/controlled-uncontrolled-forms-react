import React, { useRef, useState, useEffect } from "react";
import { List } from "../common/List";
import "./style.css";

const Form2 = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [todoList, setTodolist] = useState([]);
	const [showTodo, setShowTodo] = useState([]);
	const titleRef = useRef();
	const descriptionRef = useRef();

	const onhandleSubmit = (e) => {
		e.preventDefault();
		if (title && description) {
			const todo = {
				id: new Date().getTime().toString(),
				title,
				description,
			};
			setTodolist((todoList) => {
				return [...todoList, todo];
			});
			console.log(todo);
			console.log(todoList);
			localStorage.setItem("todoslist", JSON.stringify(todoList));
			showLocalStorageValue();
			setTitle("");
			setDescription("");
			titleRef.current.focus();
		} else alert("Please enter value. Input cannot be blank");
	};

	const showLocalStorageValue = () => {
		if (JSON.parse(localStorage.getItem("todoslist"))) {
			const itemsinlocalstorage = JSON.parse(localStorage.getItem("todoslist"));
			setShowTodo(itemsinlocalstorage);
		} else setShowTodo(["No Item to show"]);
	};

	const clearLocalStorage = () => {
		if (localStorage.getItem("todoslist") !== null) {
			localStorage.removeItem("todoslist");
			setShowTodo([]);
		} else alert("Nothing to clear");
		titleRef.current.focus();
	};

	useEffect(() => {
		titleRef.current.focus();
		showLocalStorageValue();
	}, [todoList]);

	return (
		<div className="col-md-12 offset-md-1 page-container">
			<h3>Form2: TODO LIST -React Form with Hooks</h3>
			<hr />
			<p>
				1. In this form, I have created we are adding a <strong>todo</strong>{" "}
				with title and description. That todo is being added to{" "}
				<strong>todolist</strong>. We set our key as todoslist for our
				localstorage. In order to <strong>setItem</strong> we use
				<strong>JSON.stringify()</strong>, and for <strong>retrieving</strong>{" "}
				we use <strong>JSON.parse()</strong>.
			</p>
			<p>
				I have used map in order to loop over our todoList array. Moreover,
				added timestamp as an id instead of index.
			</p>
			<ul>
				<li>a) useEffect Hook, to set it on page load.</li>
				<li>b) onhandleSubmit, after submission the focus is again reset.</li>
				<li>c) clearLocalStorage for clearing data from localStorage</li>
			</ul>

			<form onSubmit={onhandleSubmit} className="form-container">
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						value={title}
						autoComplete="false"
						onChange={(e) => setTitle(e.target.value)}
						className="form-control"
						ref={titleRef}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="todoDescription">Description</label>
					<input
						type="text"
						name="description"
						value={description}
						autoComplete="false"
						onChange={(e) => setDescription(e.target.value)}
						className="form-control"
						ref={descriptionRef}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Add Todo
				</button>{" "}
				&nbsp;
				<button
					type="button"
					className="btn btn-secondary"
					onClick={clearLocalStorage}
				>
					Clear localStorage
				</button>
			</form>
			<br />

			{showTodo !== null && (
				<div>
					<List listdata={showTodo} listname="Todos" />
				</div>
			)}
		</div>
	);
};

export default Form2;
