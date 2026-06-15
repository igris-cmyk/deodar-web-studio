import { Container } from "@/components/site/container";
import { studioDeliveryModel } from "@/config/site";

export function Process() {
  return (
    <section id="process" className="border-b border-studio-line bg-studio-canvas py-[var(--studio-section-space)]">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
          <p className="type-label text-studio-greenBright">{studioDeliveryModel.eyebrow}</p>
          <div>
            <h2 className="type-section max-w-3xl text-studio-text">{studioDeliveryModel.heading}</h2>
            <p className="type-body-lg mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">
              {studioDeliveryModel.introduction}
            </p>
          </div>
        </div>

        <ol className="mt-14 border-y border-studio-line">
          {studioDeliveryModel.stages.map((stage) => (
            <li key={stage.index} className="grid gap-7 border-t border-studio-line py-8 first:border-t-0 lg:grid-cols-[minmax(10rem,0.34fr)_minmax(0,0.66fr)] lg:gap-12 lg:py-10">
              <div>
                <p className="type-label text-studio-greenBright">{stage.index}</p>
                <h3 className="type-section mt-4 text-studio-text">{stage.title}</h3>
                <p className="type-body mt-4 max-w-sm text-studio-textSoft">{stage.decision}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="type-label text-studio-faint">Work</p>
                  <p className="type-body mt-4 max-w-[var(--studio-reading-max)] text-studio-textSoft">
                    {stage.work}
                  </p>
                </div>
                <div className="border-t border-studio-line pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <p className="type-label text-studio-faint">Gate</p>
                  <p className="type-body mt-4 max-w-[var(--studio-reading-max)] text-studio-muted">
                    {stage.gate}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="type-body-lg mt-10 max-w-[var(--studio-reading-max)] border-l border-studio-line pl-5 text-studio-textSoft">
          {studioDeliveryModel.founderStatement}
        </p>
      </Container>
    </section>
  );
}
