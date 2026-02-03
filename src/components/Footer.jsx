import {
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaMapMarkerAlt,
	FaPhoneAlt,
} from "react-icons/fa";

import { Container } from "./Container";
import { siteConfig } from "../siteConfig";

export default function Footer() {
	return (
		<footer id="contacto" className="bg-zinc-950 text-white">
			<Container className="py-14 md:py-16">
				<div className="grid gap-10 lg:grid-cols-3">
					<div>
						<p className="text-2xl font-semibold tracking-tight">
							{siteConfig.brand}
						</p>
						<p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
							Un coworking pensado para que trabajes con foco, comodidad y buena energía.
						</p>
						
					</div>

					<div className="space-y-4">
						<p className="text-sm font-semibold text-white/90">Contacto</p>
						<div className="flex items-start gap-3 text-sm text-white/75">
							<FaPhoneAlt className="mt-0.5 h-4 w-4 text-white/70" />
							<span>{siteConfig.phoneDisplay}</span>
						</div>
						<div className="flex items-start gap-3 text-sm text-white/75">
							<FaEnvelope className="mt-0.5 h-4 w-4 text-white/70" />
							<span>Cepasmendoza1@gmail.com</span>
						</div>
						<div className="flex items-start gap-3 text-sm text-white/75">
							<FaMapMarkerAlt className="mt-0.5 h-4 w-4 text-white/70" />
							<div>
								<p>{siteConfig.addressLine}</p>
								<p>{siteConfig.cityLine}</p>
								<p className="text-white/60">{siteConfig.countryLine}</p>
								<a
									href={siteConfig.links.maps}
									target="_blank"
									rel="noreferrer"
									className="mt-2 inline-flex items-center rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
								>
									Cómo llegar (GPS)
								</a>
							</div>
						</div>
					</div>

					<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
						<p className="text-sm font-semibold text-white/90">
							Horarios y planes
						</p>
						<ul className="mt-4 space-y-2 text-sm text-white/75">
							<li>Dias · Semana · Mes</li>
							<li>Escritorio fijo o flexible</li>
							<li>Horarios de 14 a 21 hs  (según disponibilidad)</li>
						</ul>
						<a
							href={siteConfig.links.whatsapp}
							target="_blank"
							rel="noreferrer"
							className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white/90"
						>
							Pedir info por WhatsApp
						</a>
					</div>
				</div>

				<div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/55">
					© {new Date().getFullYear()} {siteConfig.brand}. Todos los derechos
					reservados.
				</div>
			</Container>
		</footer>
	);
}
