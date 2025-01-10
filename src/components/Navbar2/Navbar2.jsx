import "./Navbar2.css";
import { navbarLinks } from "../data";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TbChevronLeft, TbSlashes, TbChevronRight } from "react-icons/tb";

const Navbar2 = () => {
	const [links, setLinks] = useState([]);

	useState(() => setLinks(navbarLinks), []);

	return (
		<nav className="navigation-top">
			<span className="link-divider">
				<TbChevronLeft className="link-icon" />
			</span>
			{links.map((link, index) => {
				const id = uuid();
				// console.log(link.special);
				const isLast = index + 1 === links.length;
				return (
					<div className="link" key={id}>
						<a href={link.href} className={link.special && "link-special"}>
							{link.text}
						</a>
						{isLast || (
							<span className="link-divider">
								<TbSlashes className="link-icon" />
							</span>
						)}
					</div>
				);
			})}
			<span className="link-divider">
				<TbChevronRight className="link-icon" />
			</span>
		</nav>
	);
};
export default Navbar2;
