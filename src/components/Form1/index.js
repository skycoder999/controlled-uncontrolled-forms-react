import React, { useRef, useState, useEffect } from "react";
import Alert from "../common/Alert";
import "./style.css";

const Form1 = () => {
	const [employeeName, setEmployeename] = useState("");
	const [showEmployeeName, setShowemployeename] = useState("");
	const [alert, setAlert] = useState({
		show: false,
		msg: "",
		type: "",
	});
	const employeeRef = useRef();

	const onhandleSubmit = (e) => {
		e.preventDefault();
		console.log(employeeName);
		if (employeeName) {
			setEmployeename(() => employeeName);
			localStorage.setItem("name", employeeName);
			showLocalStorageValue();
			AlertMessage(true, "Employee Name Added Successfully!", "success", 3000);
			setEmployeename("");
			employeeRef.current.focus();
		} else
			AlertMessage(
				true,
				"Please enter value. Input cannot be blank",
				"danger",
				3000
			);
	};

	useEffect(() => {
		employeeRef.current.focus();
		showLocalStorageValue();
	});

	useEffect(() => {}, [alert]);
	useEffect(() => {}, [showEmployeeName]);

	const showLocalStorageValue = () => {
		if (localStorage.getItem("name") !== null) {
			setShowemployeename(localStorage.getItem("name"));
		} else setShowemployeename("No name to show");
	};

	const clearLocalStorage = () => {
		if (localStorage.getItem("name") !== null) {
			localStorage.removeItem("name");
			setShowemployeename("No name to show");
			AlertMessage(true, "LocalStorage Cleared Successfully!", "danger", 3000);
		} else AlertMessage(true, "Nothing to clear", "danger", 3000);
		employeeRef.current.focus();
	};

	const AlertMessage = (show, msg, type, dismiss) => {
		setAlert({ show, msg, type });
		setTimeout(() => {
			setAlert({ show: false, msg: "", type: "" });
		}, dismiss);
	};

	return (
		<div className="col-md-12 offset-md-1 page-container">
			<h3>Form1: React Form with Hooks</h3>
			<hr />
			<p>
				1. In this form, I have created two useState() Hook variables and one
				ref variable using useRef() Hook. Firstly,
				<strong>"employeeName"</strong>, for fetching the value from form and
				posting it to localstorage. Another <strong>"showEmployeeName"</strong>,
				for fetching the value from localStorage and showing the current value.{" "}
				<br />
				2. After form submission, we reset the input value to blank
				<br />
				3. I am using useRef() hook to get hold of current value of input and
				set focus in two ways:-
			</p>
			<br></br>
			<ul>
				<li>a) useEffect Hook, to set it on page load.</li>
				<li>b) onhandleSubmit, after submission the focus is again reset.</li>
				<li>c) clearLocalStorage for clearing data from localStorage</li>
			</ul>

			<form onSubmit={onhandleSubmit} className="form-container">
				<div>{alert.show && <Alert {...alert} />}</div>
				<div className="form-group">
					<label htmlFor="employeeName">Employee Name</label>
					<input
						type="text"
						name="employeeName"
						value={employeeName}
						autoComplete="false"
						onChange={(e) => setEmployeename(e.target.value)}
						className="form-control"
						ref={employeeRef}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
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
			<h4>Employee Name from localStorage: {showEmployeeName}</h4>
		</div>
	);
};

export default Form1;
