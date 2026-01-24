const brand = "Coworking";

const addressLine = "Av. Ejemplo 123";
const cityLine = "Tu Ciudad";
const countryLine = "Tu País";

const phoneDisplay = "+54 11 1234-5678";
const whatsappNumber = "5491112345678";
const whatsappMessage = "Hola! Quiero información para reservar un espacio de coworking.";

const mapsQuery = `${brand} ${addressLine} ${cityLine}`;

const links = {
	whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
	maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
	instagram: "https://instagram.com/",
	facebook: "https://facebook.com/",
	linkedin: "https://linkedin.com/",
};

export const siteConfig = {
	brand,
	addressLine,
	cityLine,
	countryLine,
	phoneDisplay,
	links,
};
