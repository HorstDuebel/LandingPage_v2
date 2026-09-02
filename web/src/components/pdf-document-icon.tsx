type PdfDocumentIconProps = {
  className?: string;
};

export function PdfDocumentIcon({ className = "" }: PdfDocumentIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 4h32l16 16v56a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
        fill="color-mix(in srgb, var(--brand-taupe) 18%, white)"
        stroke="color-mix(in srgb, var(--brand-taupe) 45%, white)"
        strokeWidth="1.5"
      />
      <path
        d="M40 4v16h16"
        stroke="color-mix(in srgb, var(--brand-taupe) 45%, white)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="14"
        y="44"
        width="36"
        height="14"
        rx="3"
        fill="var(--brand-orange)"
      />
      <text
        x="32"
        y="54.5"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontFamily="var(--font-heading), sans-serif"
        fontWeight="500"
      >
        PDF
      </text>
      <path
        d="M18 30h28M18 36h20"
        stroke="color-mix(in srgb, var(--brand-dark) 25%, white)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
