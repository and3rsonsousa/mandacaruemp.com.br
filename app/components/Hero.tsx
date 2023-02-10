import { motion } from "framer-motion";

export default function Hero() {
	return (
		<div className="hero min-h-[90vh] grid bg-cover bg-top place-items-center p-8 relative">
			<motion.div
				className="w-full"
				initial={{ opacity: 0, y: "10%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="text-5xl font-bold text-white">
					Construindo
					<br />o futuro
				</div>
				<div className="my-4 text-white">Segunda frase</div>
				<div>
					<a href="/fale-conosco" className="button button-large">
						Fale conosco
					</a>
				</div>
			</motion.div>
		</div>
	);
}
