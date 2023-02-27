import { Link } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
	const [menu, setMenu] = useState(false);
	useEffect(() => {
		window.addEventListener("click", () => {
			setMenu(false);
		});

		function SetHeader() {
			if (window.scrollY > 20) {
				document.querySelector(".header")?.classList.add("short");
			} else {
				document.querySelector(".header")?.classList.remove("short");
			}
		}
		window.addEventListener("scroll", (event) => {
			SetHeader();
		});

		SetHeader();
	}, []);

	return (
		<motion.div
			className="fixed top-0 right-0 left-0 z-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.5 } }}
		>
			<div className="header p-2 relative">
				<div className="container  mx-auto z-10 flex items-center justify-between">
					<Link to="/">
						<img
							src="/logo.png"
							alt="Mandacaru Empreendimentos"
							className="logo-main"
						/>
						<img
							src="/logo-white.png"
							alt="Mandacaru Empreendimentos"
							className="logo-white"
						/>
					</Link>
					<div className="relative">
						<button
							className="lg:hidden"
							onClick={(event) => {
								event.stopPropagation();
								setMenu((prev) => !prev);
							}}
						>
							<Menu className="w-8 h-8 text-white" />
						</button>
						<AnimatePresence>
							{menu && (
								<motion.div
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{
										opacity: 1,
										scale: 1,
										transition: {
											ease: "easeOut",
										},
									}}
									exit={{
										opacity: 0,
										scale: 0.5,
										transition: {
											ease: "easeIn",
										},
									}}
									className={`absolute top-16 origin-top-right min-w-[200px] rounded-3xl right-2 bg-brand p-4 menu space-y-1`}
								>
									<Links />
								</motion.div>
							)}
						</AnimatePresence>
						<div className="menu lg:flex gap-2 hidden">
							<Links />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

const Links = () => (
	<>
		<Link to="/">Home</Link>
		<Link to="/a-empresa">A empresa</Link>
		<Link to="/o-que-fazemos">O que fazemos</Link>
		<Link to="/obras">Obras</Link>
		<Link to="/trabalhe-conosco">Trabalhe Conosco</Link>
		<Link to="/fale-conosco" className="feature">
			Fale Conosco
		</Link>
	</>
);
