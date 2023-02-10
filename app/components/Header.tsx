import { Link } from "@remix-run/react";
import { useEffect } from "react";

export default function Header() {
	useEffect(() => {
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
		<div className="header p-2 fixed top-0 right-0 left-0 z-10">
			<div className="container mx-auto flex items-center justify-between">
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
				<div className=" menu flex gap-2">
					<Link to="/">Home</Link>
					<Link to="/a-empresa">A empresa</Link>
					<Link to="/o-que-fazemos">O que fazemos</Link>
					<Link to="/nossos-projetos">Nossos Projetos</Link>
					<Link to="/fale-conosco" className="feature">
						Fale Conosco
					</Link>
				</div>
			</div>
		</div>
	);
}
