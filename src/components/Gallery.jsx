import { Container } from "./Container";

const images = [
  {
    src: "/assets/image/pasillo.jpeg",
    alt: "Equipo trabajando en mesas compartidas",
  },
  {
    src: "/assets/image/cocinamesada.jpeg",
    alt: "Sala de reuniones con buena luz",
  },
  {
    src: "/assets/image/cocina4.jpeg",
    alt: "Área de trabajo con escritorios",
  },
  {
    src: "/assets/image/salas2.jpeg",
    alt: "Interior moderno de oficina",
  },
  {
    src: "/assets/image/salaconferencia.jpeg",
    alt: "Personas conversando en espacio colaborativo",
  },
  {
    src: "/assets/image/muebles1.jpeg",
    alt: "Zona de descanso dentro del coworking",
  },
  {
    src: "/assets/image/sillones1.jpeg",
    alt: "Zona de descanso dentro del coworking",
  },
  {
    src: "/assets/image/cocina1.jpeg",
    alt: "Zona de descanso dentro del coworking",
  },
  {
    src: "/assets/image/box.jpeg",
    alt: "Zona de descanso dentro del coworking",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white">
      <Container className="py-14 md:py-20 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-wide text-zinc-600">
              Conocé el lugar
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Galería interior
            </h2>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-zinc-600">
              Fotos reales del ambiente: mesas,cocina, salas y zonas para trabajar a tu
              ritmo.
            </p>
          </div>
          <a
            href="#contacto"
            className="hidden rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 md:inline-flex"
          >
            Consultar disponibilidad
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-3xl bg-zinc-100 ring-1 ring-zinc-200"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
