import { useState } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Modal from "./components/Modal/Modal";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<h2>test</h2>
			{/* <Navbar /> */}
			<Navbar2 openModal={openModal} />
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</>
	);
}

export default App;
