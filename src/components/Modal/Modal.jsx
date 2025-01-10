import "./Modal.css";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div
			className={isModalOpen ? "modal-overlay modal-visible" : "modal-overlay"}
		>
			<div className="modal-window">
				modal window
				<button onClick={closeModal}>X</button>
			</div>
		</div>
	);
};
export default Modal;
