export default function FaleConosco() {
	return (
		<div>
			<div
				className="min-h-[70vh] bg-center grid place-items-center bg-cover"
				style={{ backgroundImage: "url(trabalhe.jpg)" }}
			>
				<div className="text-center px-8 py-16 text-white">
					<div className="font-bold tracking-tight text-[10vw] leading-none">
						Trabalhe Conosco
					</div>
					<div className="text-2xl font-light">
						Que tal fazer parte da nossa equipe?
					</div>
				</div>
			</div>
			<div className="max-w-lg text-center mx-auto p-8">
				<div className="text-center mb-8">
					<p>
						Estamos constantemente buscando novos talentos. Se você
						tem o perfil proativo e disposto a crescer conosco,
						nossas posrtas estarão abertas a te receber.
					</p>
					<hr className="my-8" />

					<p>
						Envie o seu currículo para o email{" "}
						<strong>
							trabalheconosco@mandacaruempreendimentos.com.br
						</strong>
						.
					</p>
					<hr className="my-8" />
					<p>
						Usaremos esse banco de currículos quando as vagas
						aparecerem an anossa empresa. Mantenha seus contatos
						atualizados.
					</p>
				</div>
			</div>
		</div>
	);
}
