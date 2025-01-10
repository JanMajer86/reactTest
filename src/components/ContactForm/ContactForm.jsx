import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
	const [message, setMessage] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setMessage({ ...message, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(message);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h4>get in touch</h4>
			<div className="form-row">
				<label htmlFor="name" className="form-label">
					name
				</label>
				<input
					type="text"
					className="form-input"
					id="name"
					name="name"
					value={message.name}
					onChange={handleChange}
					placeholder="your name"
				/>
			</div>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					email
				</label>
				<input
					type="email"
					className="form-input"
					id="email"
					name="email"
					value={message.email}
					onChange={handleChange}
					placeholder="email@adress.xyz"
				/>
			</div>
			<div className="form-row">
				<label htmlFor="message" className="form-label">
					message
				</label>
				<input
					type="text"
					className="form-input"
					id="message"
					name="message"
					value={message.message}
					onChange={handleChange}
					placeholder="your message"
				/>
			</div>
			<button type="submit">send message</button>
		</form>
	);
};
export default ContactForm;
