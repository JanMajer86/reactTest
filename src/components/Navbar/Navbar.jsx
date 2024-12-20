import { useEffect, useState } from "react";
import "./Navbar.css";
import { navbarLinks } from "../data";

const Navbar = () => {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		const separator = "|";
		const newLinks = navbarLinks.flatMap((e) => [e, separator]).slice(0, -1);
		setLinks(newLinks);
	}, []);

	return (
		<div>
			<h2>Navbar</h2>
			{links.map((link, index) => {
				return typeof link === "object" ? (
					<a href={link.href} key={index}>
						{link.text}
					</a>
				) : (
					<span key={index}>{link}</span>
				);
			})}
		</div>
	);
};
export default Navbar;
