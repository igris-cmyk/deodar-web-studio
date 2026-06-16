import { Container } from "@/components/site/container";
import { SupportingWork } from "@/components/site/supporting-work";
import { supportingWorkChapter } from "@/config/site";

export function Work() {
  return (
    <section id="work" className="border-b border-studio-line bg-studio-canvas py-[var(--studio-section-space)]">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end">
          <p className="type-label text-studio-greenBright">{supportingWorkChapter.eyebrow}</p>
          <div>
            <h2 className="type-section max-w-3xl text-studio-text">{supportingWorkChapter.heading}</h2>
            <p className="type-body-lg mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">
              {supportingWorkChapter.introduction}
            </p>
          </div>
        </div>

        <SupportingWork />
      </Container>
    </section>
  );
}
