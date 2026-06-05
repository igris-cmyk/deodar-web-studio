type SectionHeadingProps = {
  label: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ label, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
