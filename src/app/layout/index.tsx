import React from "react";
import Header from "@/app/layout/Header";
import Navbar from "@/app/layout/Navbar";
import Footer from "@/app/layout/Footer";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<React.Fragment>
			<Navbar>
				{[1, 2, 3, 4, 5].map((item) => (
					<div>item {item}</div>
				))}
			</Navbar>
			<Header>Header Children</Header>
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
}
