export default function Starts({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Calificación ${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`w-4 h-4 ${i < rating ? "fill-brand-orange" : "fill-brand-navy/15"}`}
          aria-hidden="true"
        >
          <path d="M12 2l2.95 6.97 7.55.64-5.74 4.97 1.74 7.42L12 17.9l-6.5 4.1 1.74-7.42L1.5 9.61l7.55-.64L12 2z" />
        </svg>
      ))}
    </div>
  )
}
