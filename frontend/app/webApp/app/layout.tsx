import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "WebApp",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" className="h-full overflow-hidden w-full">
			<body className="w-full h-full select-none">{children}</body>
		</html>
	);
}
