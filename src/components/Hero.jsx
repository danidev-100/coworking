import { FaArrowRight } from "react-icons/fa";

import { Container } from "./Container";
import Header from "./Header";
import { siteConfig } from "../siteConfig";

const HERO_IMAGE =
	"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
	return (
		<section
			id="inicio"
			className="relative isolate min-h-[82vh] overflow-hidden bg-zinc-950"
		>
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${HERO_IMAGE})` }}
			/>
			<div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/55 to-black/35" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white to-transparent" />

			<div className="relative">
				<Header />
				<Container className="pb-14 pt-24 md:pb-20 md:pt-28 lg:pb-28">
					<div className="max-w-2xl">
						<p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white ring-1 ring-white/15">
							Espacios flexibles · Salas · Café · WiFi rápido
						</p>
						<h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
							Un coworking moderno para trabajar cómodo y concentrado
						</h1>
						<p className="mt-5 text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
							Luz natural, ambientes silenciosos, zonas colaborativas y todo lo que necesitás
							 para que tu día rinda más.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-3">
							<a
								href="#galeria"
								className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm shadow-black/25 transition hover:bg-white/90"
							>
								Ver espacios <FaArrowRight className="h-4 w-4" />
							</a>
							<a
								href={siteConfig.links.whatsapp}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
							>
								Contactar por WhatsApp
							</a>
						</div>

						<div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-white/85">
							
							<div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
								<p className="text-2xl font-semibold text-white">Salas</p>
								<p className="mt-1 text-xs">Reuniones y calls</p>
							</div>
							<div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
								<p className="text-2xl font-semibold text-white">Café</p>
								<p className="mt-1 text-xs">Incluido en el día</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
}
