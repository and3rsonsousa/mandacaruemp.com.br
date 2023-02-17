import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
	return (
		<>
			<Hero />
			<WhoWeAre />
			<Obras />
			<Map />
			<Contato />
		</>
	);
}

function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
	return (
		<motion.div
			ref={ref}
			className="hero min-h-[90vh] grid bg-cover bg-top place-items-center p-8 relative"
			style={{ backgroundPositionY: y }}
		>
			<motion.div
				className="w-full text-center mt-80"
				initial={{ opacity: 0, y: "10%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="text-5xl font-bold text-white">
					Construindo
					<br />o futuro
				</div>
				<div className="my-4 text-white">
					Sempre com a preocupação de fazer com qualidade e cumprir
					prazos de entrega, desde sua fundação.
				</div>
				<div>
					<a href="/fale-conosco" className="button button-large">
						Fale conosco
					</a>
				</div>
			</motion.div>
		</motion.div>
	);
}

function WhoWeAre() {
	return (
		<div className="container mx-auto relative -mt-24">
			<div className="bg-brand text-brand-200 mx-24 p-8 rounded-2xl">
				<div className=" gap-8 grid grid-cols-3">
					<div>
						<h2 className="mb-2 text-white text-2xl font-bold tracking-tight">
							O que fazemos
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quae ipsa consectetur aliquid totam doloremque
							laborum minima ducimus ad natus harum, voluptas
							maiores. Ipsam, illo.
						</p>
					</div>
					<div>
						<h2 className="mb-2 text-white text-2xl font-bold tracking-tight">
							Como fazemos
						</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Ut, sunt. Corporis, quae amet. Veritatis
							repudiandae a eos.
						</p>
					</div>
					<div>
						<h2 className="mb-2 text-white text-2xl font-bold tracking-tight">
							Porque fazemos
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquid unde autem distinctio aliquam aperiam
							corporis odit neque sequi quo praesentium quidem
							odio aut, a nam et iure mollitia, dicta cum?
						</p>
					</div>
				</div>
				<div className="font-medium text-center border-t border-brand-800 w-1/2 mx-auto pt-8 mt-8">
					Saiba mais sobre a nossa empresa{" "}
					<a href="/a-empresa" className="underline font-semibold">
						aqui
					</a>
					.
				</div>
			</div>
		</div>
	);
}

function Obras() {
	return (
		<div className="container mx-auto">
			<div className="font-bold text-5xl text-center px-8 py-16">
				Nós que fizemos
			</div>
			<div className=" mb-16 -mt-8">
				<img src="/ico.png" alt="Mandacaru" className="mx-auto h-12" />
			</div>
			<div className="grid grid-cols-2 gap-16 px-8">
				{[1, 2].map((item) => {
					return (
						<div className="flex relative gap-8" key={item}>
							<div
								className={`absolute h-full w-1/2 ${
									item % 2 == 0 ? "-top-16" : "-bottom-16"
								} left-24  bg-accent-50 rounded-2xl`}
							></div>
							<div className="w-1/2 rounded-2xl overflow-hidden isolate">
								<img src="/case.jpg" alt="Case" />
							</div>
							<div className="w-1/2 isolate">
								<h4 className="font-semibold text-xl mb-1">
									Lorem ipsum dolor sit.
								</h4>
								<p className="text-sm text-gray-500">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Laboriosam a possimus
									autem! Praesentium ab sequi atque quidem ad
									obcaecati accusantium sit.
								</p>
								<div className="mt-1">
									<a
										href="/"
										className="underline font-semibold text-xs uppercase tracking-wider"
									>
										Conheça mais desse projeto
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="font-medium text-center mx-auto mt-8">
				Veja todos os nossos projetos{" "}
				<a href="/nossos-projetos" className="underline font-semibold">
					aqui
				</a>
				.
			</div>
		</div>
	);
}

function Map() {
	return (
		<div className="mt-16">
			<div className="font-bold text-5xl text-center px-8 py-16">
				Veja como é fácil nos encontrar
			</div>
			<img
				src="/map.webp"
				alt="Mapa"
				className="h-[50vh] object-cover w-full"
			/>
		</div>
	);
}

function Contato() {
	return (
		<div className="bg-brand">
			<div className="container px-8 py-16 text-brand-200">
				<h3 className="text-3xl text-white font-semibold">
					Fale conosco
				</h3>
				<div className="mt-2 grid grid-cols-3 gap-8">
					<div>
						<h4 className="text-white text-xl font-semibold">
							Endereço
						</h4>
						<div className="text-sm">
							Lorem ipsum, dolor sit amet consectetur adipisicing.{" "}
							<br />
							Lorem, ipsum.
						</div>
						<h4 className="text-white text-xl font-semibold mt-2">
							Telefone
						</h4>
						<div className="text-sm">(88) 0000-0000</div>
					</div>
					<div>
						<h4 className="text-white text-xl font-semibold">
							WhatsApp
						</h4>
						<div className="text-sm">(88) 00000-0000</div>
						<h4 className="text-white text-xl font-semibold mt-2">
							Email
						</h4>
						<div className="text-sm">email@provedor.com</div>
					</div>
				</div>
			</div>
		</div>
	);
}
