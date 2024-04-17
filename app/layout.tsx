import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "./error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Todos",
	description: "Keep track of your todos!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ErrorBoundary>
				<body className={inter.className}>{children}</body>
			</ErrorBoundary>
		</html>
	);
}
