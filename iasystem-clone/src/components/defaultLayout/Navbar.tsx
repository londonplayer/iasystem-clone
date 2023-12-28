interface NavbarProps {
	children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
	return (
		<div>
			<h1>Navbar</h1>
			{children}
		</div>
	);
}
