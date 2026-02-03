const brand = "Coworking";

const addressLine = "Sobremonte 939 Dorrego Guaymallen";
const cityLine = "Mendoza";
const countryLine = "Argentina";

const phoneDisplay = "+54 2616797200";
const whatsappNumber = "2616797200";
const whatsappMessage = "Hola! Quiero información para reservar un espacio de coworking.";



const links = {
	whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
	maps: `https://www.google.com/maps/place/Royal+Prestige/@-32.9054789,-68.8320998,17z/data=!3m1!4b1!4m6!3m5!1s0x967e09007878b173:0xe7fdea9fcd22e889!8m2!3d-32.9054789!4d-68.8320998!16s%2Fg%2F11vshf8g5q!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D`,
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
