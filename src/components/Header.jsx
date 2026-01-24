import { FaWhatsapp } from "react-icons/fa";

import { Container } from "./Container";
import { siteConfig } from "../siteConfig";

export default function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="border-b border-white/10 bg-black/25 backdrop-blur-md">
                <Container className="py-4">
                    <div className="flex items-center justify-between gap-4">
                        <a
                            href="#inicio"
                            className="inline-flex items-center gap-2 rounded-lg text-white"
                        >
                            <span className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
                            <span className="text-base font-semibold tracking-tight">
                                {siteConfig.brand}
                            </span>
                        </a>

                        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
                            <a className="hover:text-white" href="#espacios">
                                Espacios
                            </a>
                            <a className="hover:text-white" href="#galeria">
                                Galería
                            </a>
                            <a className="hover:text-white" href="#contacto">
                                Contacto
                            </a>
                        </nav>

                        
                    </div>
                </Container>
            </div>
        </header>
    );
}