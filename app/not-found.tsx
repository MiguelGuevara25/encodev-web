import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-brand-navy">
          Página no encontrada
        </h2>
        <p className="mt-2 text-sm text-brand-navy">
          La página que estás buscando no existe o se ha trasladado.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-navy px-4 py-2 text-sm font-medium text-brand-white transition-colors hover:bg-brand-navy/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
