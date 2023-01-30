import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import styles from "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{
		rel: "icon",
		href: "/ico.png",
	},
];

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Mandacaru Empreendimentos",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="pt-br">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<Outlet />
				<Footer />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
