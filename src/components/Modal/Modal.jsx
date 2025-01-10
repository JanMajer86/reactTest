import ContactForm from "../ContactForm/ContactForm";
import "./Modal.css";
import { TbXboxX } from "react-icons/tb";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div
			className={isModalOpen ? "modal-overlay modal-visible" : "modal-overlay"}
		>
			<div className="modal-window">
				<button onClick={closeModal} className="btn-close">
					<TbXboxX />
				</button>
				<ContactForm />
			</div>
		</div>
	);
};
export default Modal;
