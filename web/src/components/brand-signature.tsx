type BrandSignatureVariant = "header" | "section";

type BrandSignatureProps = {
  variant?: BrandSignatureVariant;
  className?: string;
  showName?: boolean;
};

const ARIA_LABEL = "Frank Vullhorst, ki: sicher strategisch sinnvoll";

export function BrandSignature({
  variant = "header",
  className = "",
  showName = true,
}: BrandSignatureProps) {
  return (
    <span
      className={`brand-signature brand-signature--${variant}${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={ARIA_LABEL}
    >
      <span className="brand-signature__rule brand-signature__rule--top" aria-hidden="true" />
      {showName ? (
        <span className="brand-signature__name" aria-hidden="true">
          Frank Vullhorst
        </span>
      ) : null}
      <span className="brand-signature__lockup" aria-hidden="true">
        <span className="brand-signature__tagline">
          <span className="brand-signature__ki">ki:</span>
          <span className="brand-signature__word-text">sicher</span>
          <span className="brand-signature__word-text">strategisch</span>
          <span className="brand-signature__word-text">sinnvoll</span>
        </span>
        <span className="brand-signature__accents">
          <span className="brand-signature__ki brand-signature__ki--ghost">
            ki:
          </span>
          <span className="brand-signature__accent">
            <span className="brand-signature__word-ghost">sicher</span>
            <span className="brand-signature__word-bar brand-signature__word-bar--taupe" />
          </span>
          <span className="brand-signature__accent">
            <span className="brand-signature__word-ghost">strategisch</span>
            <span className="brand-signature__word-bar brand-signature__word-bar--teal" />
          </span>
          <span className="brand-signature__accent">
            <span className="brand-signature__word-ghost">sinnvoll</span>
            <span className="brand-signature__word-bar brand-signature__word-bar--orange" />
          </span>
        </span>
      </span>
    </span>
  );
}
