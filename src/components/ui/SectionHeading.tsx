interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 text-center">
      {eyebrow && (
        <p className="mb-2 font-chrome text-xs uppercase tracking-[0.2em] text-plum">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-semibold text-cocoa sm:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl font-body text-sm text-plum sm:text-base">{description}</p>
      )}
    </div>
  );
}
