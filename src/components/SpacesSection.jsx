import { FaBolt, FaCoffee, FaDoorOpen, FaWifi } from "react-icons/fa";

import { Container } from "./Container";

// Archivos dentro de `public/` se sirven desde la raíz: `public/assets/...` -> `/assets/...`
const IMAGE_MAIN = "/assets/image/salas1.jpeg";
const IMAGE_SECONDARY =
	"/assets/image/pasillo.jpeg";

const features = [
	{
		icon: FaWifi,
		title: "WiFi rápido",
		description: "Conexión estable para videollamadas y trabajo intenso.",
	},
	{
		icon: FaCoffee,
		title: "Café y confort",
		description: "Zonas de descanso para recargar energía cuando lo necesites.",
	},
	{
		icon: FaDoorOpen,
		title: "Salas",
		description: "Espacios para reuniones, presentaciones o llamadas privadas.",
	},
	{
		icon: FaBolt,
		title: "Listo para enchufar",
		description: "Tomas y mesas pensadas para productividad real.",
	},
];

export default function SpacesSection() {
	return (
		<section id="espacios" className="bg-zinc-50">
			<Container className="py-14 md:py-20 lg:py-24">
				<div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<p className="text-sm font-semibold tracking-wide text-zinc-600">
							Espacios diseñados para tu foco
						</p>
						<h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
							Tu lugar para trabajar, reunirte y crear
						</h2>
						<p className="mt-4 text-pretty leading-relaxed text-zinc-600">
							Un ambiente moderno, con buena iluminación y diferentes zonas para cada
							estilo de trabajo: silencioso, colaborativo o reuniones.
						</p>

						<div className="mt-8 grid gap-4 sm:grid-cols-2">
							{features.map((feature) => {
								const Icon = feature.icon;
								return (
									<div
										key={feature.title}
										className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200"
									>
										<div className="flex items-start gap-3">
											<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white">
												<Icon className="h-4 w-4" />
											</span>
											<div>
												<p className="font-semibold text-zinc-900">
													{feature.title}
												</p>
												<p className="mt-1 text-sm leading-relaxed text-zinc-600">
													{feature.description}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div className="relative">
						<div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-white via-zinc-50 to-white" />
						<div className="relative grid gap-4">
							<div className="overflow-hidden rounded-3xl bg-zinc-200 shadow-sm ring-1 ring-zinc-200">
								<img
									src={IMAGE_MAIN}
									alt="Zona principal del coworking"
									className="h-70 w-full object-cover sm:h-85"
									loading="lazy"
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="overflow-hidden rounded-3xl bg-zinc-200 shadow-sm ring-1 ring-zinc-200">
									<img
										src={IMAGE_SECONDARY}
										alt="Mesas y ambiente de trabajo"
										className="h-40 w-full object-cover sm:h-44"
										loading="lazy"
									/>
								</div>
								<div className="rounded-3xl bg-zinc-900 p-6 text-white shadow-sm">
									<p className="text-sm font-semibold text-white/80">
										Ideal para
									</p>
									<p className="mt-2 text-2xl font-semibold">Freelancers</p>
									<p className="mt-1 text-2xl font-semibold">Equipos</p>
									<p className="mt-1 text-2xl font-semibold">Startups</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
