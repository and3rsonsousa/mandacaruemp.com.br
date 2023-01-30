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
				<div>
					<img
						src="/logo.png"
						alt="Mandacaru Empreendimentos"
						className="h-12 transition-all logo-main"
					/>
					<img
						src="/logo-white.png"
						alt="Mandacaru Empreendimentos"
						className="h-12 transition-all logo-white"
					/>
				</div>
				<div className=" menu flex gap-2">
					<a href="/">Home</a>
					<a href="/">A empresa</a>
					<a href="/">O que fazemos</a>
					<a href="/">Nossos Projetos</a>
					<a href="/" className="feature">
						Fale Conosco
					</a>
				</div>
			</div>
		</div>
	);
}
