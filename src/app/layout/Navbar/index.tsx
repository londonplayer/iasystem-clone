import { FaChevronLeft } from "react-icons/fa";

interface NavbarProps {
	children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
	return (
		<nav className="navbar-container">
			<header className="navbar-header">
				<div className="flex flex-row">
					<FaChevronLeft className="h-5 w-4" />
					<h1 className="text-lg">Alterar Módulo</h1>
				</div>
			</header>
			<div className="d-flex">{children}</div>
		</nav>
	);
}
