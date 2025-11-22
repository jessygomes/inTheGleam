import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "inTheGleam - Développement Web",
    short_name: "inTheGleam",
    description:
      "Freelancers spécialisés en développement web et mobile sur mesure. Sites vitrine, e-commerce, applications web modernes.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logos/LogoPNG_inTheGleam_Black.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
