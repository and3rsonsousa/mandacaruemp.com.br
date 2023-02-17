import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	ScrollRestoration,
	useLocation,
	useOutlet,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./tailwind.css";
import Layout from "./components/Layout";

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
	const outlet = useOutlet();
	const location = useLocation();

	if (!outlet) return null;
	return (
		<html lang="pt-br">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<AnimatePresence mode="wait">
					<motion.div
						key={location.pathname}
						transition={{ duration: 0.5 }}
						initial={{ opacity: 0, scale: 1.05 }}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							scale: 0.95,
						}}
						style={{ originY: 0 }}
					>
						<Layout>{outlet}</Layout>

						{/* <motion.div
								className="bg-accent fixed top-0 left-0 bottom-0 right-0 z-[1000]"
								transition={{ duration: 1 }}
								initial={{ scaleX: 1 }}
								animate={{
									scaleX: 0,
								}}
								exit={{
									scaleX: 1,
								}}
								style={{ originX: isPresent ? 0 : 1 }}
							/> */}
					</motion.div>
				</AnimatePresence>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
