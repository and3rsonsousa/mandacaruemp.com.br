import { motion, useScroll, useTransform } from "framer-motion";
import {
	HardHat,
	Instagram,
	Leaf,
	MapPin,
	Phone,
	ToyBrick,
} from "lucide-react";
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

	const y = useTransform(scrollYProgress, [0, 1], ["0", "300px"]);
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
				<div className="my-4 text-white max-w-md mx-auto">
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
		<div className="container mx-auto relative -mt-12">
			<div className="bg-brand text-brand-200 text-center mx-24 p-8 rounded-2xl">
				<div className=" gap-8 grid grid-cols-3">
					<div>
						<HardHat className="h-16 w-16 mx-auto mb-4" />
						<h2 className="mb-2 text-white text-2xl font-bold tracking-tight">
							Equipe de profissionais com larga experiência na
							construção civil.
						</h2>
					</div>
					<div>
						<ToyBrick className="h-16 w-16 mx-auto mb-4" />
						<h2 className="mb-2 text-white text-2xl font-bold tracking-tight">
							Integramos funcionalidade e tecnologia, produzindo
							conforto habitacional e qualidade de vida.
						</h2>
					</div>
					<div>
						<Leaf className="h-16 w-16 mx-auto mb-4" />
						<h2 className="mb-2 text-white text-2xl font-bold tracking-tight">
							Cuidado e atenção com o meio ambiente estão sempre
							presente nos empreendimentos.
						</h2>
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
			<div className="mb-16 -mt-8">
				<img src="/ico.png" alt="Mandacaru" className="mx-auto h-12" />
			</div>
			<div>
				<div className="text-center max-w-xs mx-auto bg-brand-100 rounded-xl p-4">
					Em breve
				</div>
			</div>
			{/* 			
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
			</div> */}
		</div>
	);
}

function Map() {
	return (
		<div className="mt-16 w-full overflow-x-hidden">
			<div className="font-bold text-5xl text-center px-8 py-16">
				Veja como é fácil nos encontrar
			</div>
			<iframe
				title="Mapa"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1539.2918149896334!2d-40.33160570954907!3d-3.705024656658863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eac795167896fb%3A0xffb93e9b3deba2e3!2sMandacar%C3%BA%20Empreendimentos!5e0!3m2!1sen!2sbr!4v1677208513631!5m2!1sen!2sbr"
				height="450"
				style={{ border: 0, width: "100vw" }}
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}

function Contato() {
	return (
		<div className="bg-accent">
			<div className="container max-w-4xl mx-auto px-8 py-8 text-accent-200">
				<div className="font-bold text-white text-5xl text-center px-8 py-16">
					Vamos conversar?
				</div>

				<div className="mt-2 text-center grid grid-cols-3 gap-8">
					<div>
						<MapPin className="w-8 h-8 mx-auto mb-4" />
						<h4 className="text-white text-xl font-semibold">
							Endereço
						</h4>
						<div className="text-sm">
							Rua Caetano Figueiredo, 1039
							<br />
							COHAB II - Sobral
						</div>
					</div>
					<div>
						<Phone className="w-8 h-8 mx-auto mb-4" />
						<h4 className="text-white text-xl font-semibold mt-2">
							Telefone
						</h4>
						<div className="text-sm">(88) 9902-9372</div>
					</div>
					<div>
						<Instagram className="w-8 h-8 mx-auto mb-4" />
						<h4 className="text-white text-xl font-semibold mt-2">
							Instagram
						</h4>
						<div className="text-sm">
							<a
								href="https://www.instagram.com/mandacaruempreendimentos_/"
								target="_blank"
								rel="noreferrer"
							>
								@mandacaruempreendimentos_
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
