interface HeaderProps {
	children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
	return <header>{children}</header>;
}
