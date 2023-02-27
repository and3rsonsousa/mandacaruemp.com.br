import { MapPin, Phone, Instagram } from "lucide-react";

export default function FaleConosco() {
	return (
		<div className="bg-accent">
			<div
				className="min-h-[70vh] bg-center bg-cover grid place-items-center"
				style={{ backgroundImage: "url(faleconosco.jpg)" }}
			>
				<div className="font-bold text-white text-[10vw] leading-none text-center px-8 py-16">
					Vamos conversar?
				</div>
			</div>
			<div className="container max-w-4xl mx-auto px-8 py-8 text-accent-200">
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
