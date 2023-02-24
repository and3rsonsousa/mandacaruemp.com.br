export default function Empresa() {
	return (
		<>
			<div
				className="min-h-[70vh] bg-center bg-cover"
				style={{ backgroundImage: "url(equipe.jpg)" }}
			></div>
			<div className="max-w-lg text-center mx-auto p-8">
				<div className="text-5xl font-bold mb-8">A Empresa</div>
				<div className="text-2xl font-light">
					Sempre com a preocupação de fazer com qualidade e cumprir
					prazos de entrega, desde sua fundação.
				</div>
			</div>
			<div className="mx-auto container max-w-5xl p-8">
				<div className="flex items-start gap-8 ">
					<div className="sticky top-20 w-1/2">
						<img src="equipe2.jpg" alt="" />
					</div>
					<div className="w-1/2">
						<p className="mb-8">
							O tempo consolidou nosso trabalho e nossa imagem no
							mercado. Acompanhando as principais tendências no
							mercado, ampliamos nossos serviços: hoje somos a
							Mandacaru Empreendimentos Ltda.
						</p>
						<p className="mb-8">
							Com atuação regional, a Mandacaru é responsável
							tanto pela execução de obras próprias como também de
							obras contratadas por terceiros, representadas nos
							mais variados segmentos, como: residenciais,
							comerciais, hospitalares, órgãos públicos e
							industrial.
						</p>
						<p className="mb-8">
							Formada por uma equipe de profissionais com larga
							experiência na construção civil, a Mandacaru tem a
							constante preocupação com a excelência,
							utilizando-se de: processos modernos de gestão, mão
							de obra qualificada, materiais de primeira linha e
							avançada tecnologia construtiva.
						</p>
						<p className="mb-8">
							Além da preocupação com o design, requinte e a
							sofisticação de seus empreendimentos, a Mandacaru
							também busca integrar a funcionalidade e tecnologia,
							com o propósito de produzir um melhor conforto
							habitacional e o máximo de qualidade de vida para as
							pessoas que utilizam os seus empreendimentos. O
							cuidado e atenção com o meio ambiente está presente
							nos empreendimentos da construtora.
						</p>
						<p className="mb-8">
							A partir da busca constante pelas mais modernas
							práticas de preservação dos recursos naturais, a
							execução dos empreendimentos permeiam diversos
							parâmetros, como: utilização de programa de
							destinação de resíduos das obras, projetos com
							melhor aproveitamento de iluminação e ventilação
							natural, reaproveitamento de águas pluviais e a
							conscientização constante na seleção e coleta
							seletiva de lixo em seus empreendimentos.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
