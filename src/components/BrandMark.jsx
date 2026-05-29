// Occasio Strategy brand mark — composable wordmark + symbol.
// Uses pure SVG so it scales crisply and inherits theming.

export function OccasioSymbol({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="oc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6d4ed8" />
          <stop offset="65%" stopColor="#0d0a1f" />
        </linearGradient>
        <linearGradient id="oc-beam" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.1" />
          <stop offset="65%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="12" fill="url(#oc-bg)" />
      <text
        x="32"
        y="40"
        fontFamily="Manrope, system-ui, sans-serif"
        fontWeight="700"
        fontSize="36"
        textAnchor="middle"
        fill="#f6f3ff"
        letterSpacing="-1"
      >
        O
      </text>
      <rect x="18" y="46" width="28" height="2" fill="url(#oc-beam)" />
    </svg>
  )
}

export function OccasioWordmark({ className = '', showTagline = true }) {
  return (
    <div className={`flex flex-col items-start leading-none ${className}`}>
      <span className="font-display font-bold tracking-tighter text-paper text-[1.05em]">
        OCCASIO
      </span>
      {showTagline && (
        <>
          <span className="block w-full h-px my-1 bg-beam-soft" />
          <span className="font-mono text-[0.5em] tracking-beam text-paper-muted uppercase">
            Strategy
          </span>
        </>
      )}
    </div>
  )
}

export default function BrandMark({ size = 36, className = '' }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-3 group ${className}`}>
      <OccasioSymbol size={size} />
      <OccasioWordmark className="text-[15px]" />
    </a>
  )
}
