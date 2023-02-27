export default function FaleConosco() {
	return (
		<div>
			<div
				className="min-h-[70vh] bg-center bg-cover"
				style={{ backgroundImage: "url(equipe.jpg)" }}
			></div>
			<div className="max-w-lg text-center mx-auto p-8">
				<div className="text-5xl font-bold mb-8">Trabalhe conosco</div>
				<div className="text-2xl font-light">
					Que tal fazer parte da nossa equipe?
				</div>
			</div>
			<div className="text-center mb-8">
				Envie o seu currículo para o email{" "}
				<strong>trabalheconosco@mandacaruempreendimentos.com.br</strong>
				.
			</div>
		</div>
	);
}
