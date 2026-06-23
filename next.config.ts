import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <-- Añade esta línea
  // Si usas imágenes con el componente <Image /> de Next, añade esto también:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
