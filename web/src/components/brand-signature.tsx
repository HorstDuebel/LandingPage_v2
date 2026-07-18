type BrandSignatureVariant = "header" | "footer" | "section";

type BrandSignatureProps = {
  variant?: BrandSignatureVariant;
  className?: string;
};

const ARIA_LABEL = "Frank Vullhorst, ki: sicher strategisch sinnvoll";

export function BrandSignature({
  variant = "header",
  className = "",
}: BrandSignatureProps) {
  return (
    <span
      className={`brand-signature brand-signature--${variant}${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={ARIA_LABEL}
    >
      <span className="brand-signature__name" aria-hidden="true">
        Frank Vullhorst
      </span>
      <span className="brand-signature__lockup" aria-hidden="true">
        <span className="brand-signature__tagline">
          <span className="brand-signature__ki">ki:</span>
          <span className="brand-signature__word">sicher</span>
          <span className="brand-signature__word">strategisch</span>
          <span className="brand-signature__word">sinnvoll</span>
        </span>
        <span className="brand-signature__rule">
          <span className="brand-signature__ki brand-signature__ghost">ki:</span>
          <span className="brand-signature__accent">
            <span className="brand-signature__ghost">sicher</span>
            <span className="brand-signature__bar brand-signature__bar--taupe" />
          </span>
          <span className="brand-signature__accent">
            <span className="brand-signature__ghost">strategisch</span>
            <span className="brand-signature__bar brand-signature__bar--teal" />
          </span>
          <span className="brand-signature__accent">
            <span className="brand-signature__ghost">sinnvoll</span>
            <span className="brand-signature__bar brand-signature__bar--orange" />
          </span>
        </span>
      </span>
    </span>
  );
}
