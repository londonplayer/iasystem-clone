import Header from "@/components/defaultLayout/Header";
import Navbar from "@/components/defaultLayout/Navbar";
import Footer from "@/components/defaultLayout/Footer";

interface DefaultLayoutProps {
	children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<Navbar>
			<Header />
			<main>{children}</main>
			<Footer />
		</Navbar>
	);
}
