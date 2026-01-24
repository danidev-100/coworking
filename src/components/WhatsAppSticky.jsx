import { FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "../siteConfig";

export default function WhatsAppSticky() {
	return (
		<a
			href={siteConfig.links.whatsapp}
			target="_blank"
			rel="noreferrer"
			aria-label="Abrir WhatsApp"
			className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 ring-1 ring-black/5 transition hover:bg-emerald-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
		>
			<FaWhatsapp className="h-5 w-5" />
			<span className="hidden sm:inline">WhatsApp</span>
		</a>
	);
}
