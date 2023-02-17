import { Link } from "@remix-run/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Empresa() {
	return (
		<>
			<div
				className="min-h-[50vh] bg-center grid bg-cover place-content-center"
				style={{ backgroundImage: "url(equipe.jpg)" }}
			>
				<div className="max-w-sm text-center p-8">
					<div className="text-5xl font-bold mb-8">A Empresa</div>
					<div className="text-2xl font-light">
						Sempre com a preocupação de fazer com qualidade e
						cumprir prazos de entrega, desde sua fundação.
					</div>
				</div>
			</div>
			<div className="mx-auto container max-w-5xl p-8">
				<Section
					text="O tempo consolidou nosso trabalho e nossa imagem no mercado.
				Acompanhando as principais tendências no mercado, ampliamos
				nossos serviços: hoje somos a Mandacaru Empreendimentos Ltda."
					image="equipe.jpg"
				/>
				<Section
					text="Com atuação regional, a Mandacaru é responsável tanto pela execução de obras próprias como também de obras contratadas por terceiros, representadas nos mais variados segmentos, como: residenciais, comerciais, hospitalares, órgãos públicos e industrial."
					image="equipe.jpg"
					reverse
				/>
			</div>
			<div className="bg-accent-700 text-center text-xl text-white min-h-[50vh] relative">
				<div className="text-2xl mb-4 absolute">
					Que tal conhecer mais sobre a nossa empresa?
				</div>

				<div className="flex min-h-[50vh]">
					<div className="bg-accent-900 w-full">
						<Link
							className="button button-feature"
							to="/o-que-fazemos"
						>
							O que fazemos
						</Link>
					</div>
					<div className="bg-brand-900 w-full">
						<Link
							className="button button-feature"
							to="/nossos-projetos"
						>
							Nossos projetos
						</Link>
					</div>
				</div>
			</div>

			<div className="mx-auto container max-w-5xl p-8">
				<Section
					text="Formada por uma equipe de profissionais com larga
						experiência na construção civil, a Mandacaru tem a
						constante preocupação com a excelência, utilizando-se
						de: processos modernos de gestão, mão de obra
						qualificada, materiais de primeira linha e avançada
						tecnologia construtiva."
					image="equipe.jpg"
				/>
				<Section
					text="Além da preocupação com o design, requinte e a sofisticação
					de seus empreendimentos, a Mandacaru também busca integrar a
					funcionalidade e tecnologia, com o propósito de produzir um
					melhor conforto habitacional e o máximo de qualidade de vida
					para as pessoas que utilizam os seus empreendimentos. O
					cuidado e atenção com o meio ambiente está presente nos
					empreendimentos da construtora."
					image="equipe.jpg"
					reverse
				/>
				<Section
					text="A partir da busca constante pelas mais modernas práticas de
					preservação dos recursos naturais, a execução dos
					empreendimentos permeiam diversos parâmetros, como:
					utilização de programa de destinação de resíduos das obras,
					projetos com melhor aproveitamento de iluminação e
					ventilação natural, reaproveitamento de águas pluviais e a
					conscientização constante na seleção e coleta seletiva de
					lixo em seus empreendimentos."
					image="equipe.jpg"
				/>
			</div>
		</>
	);
}

const Section = ({
	text,
	image,
	reverse,
}: {
	text: string;
	image: string;
	reverse?: boolean;
}) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const y = useTransform(scrollYProgress, [0, 1], ["25%", "-50%"]);

	return (
		<motion.div
			className="grid grid-cols-7 gap-8 items-center py-16"
			style={{ scale: 0.9, opacity: 0 }}
			whileInView={{
				scale: 1,
				opacity: 1,
				transition: { duration: 0.5, delay: 0.2 },
			}}
		>
			<motion.div
				className={`col-span-3 relative ${
					reverse
						? "order-2 origin-left"
						: "col-start-2 order-1 origin-right"
				}`}
			>
				<motion.div
					className={`absolute -top-16 bottom-16  ${
						reverse
							? "-right-16 bg-accent-100"
							: "-left-16 bg-brand-100"
					}`}
					style={{ width: "0%" }}
					whileInView={{
						width: "80%",
						transition: { duration: 1, delay: 0.5 },
					}}
				></motion.div>
				<div className="relative">{text}</div>
			</motion.div>
			<motion.div
				style={{ y }}
				className={`col-span-3 overflow-hidden ${
					reverse ? "order-1" : " order-2"
				}`}
				ref={ref}
			>
				<motion.img src={image} alt="Imagem" style={{ scale }} />
			</motion.div>
		</motion.div>
	);
};
