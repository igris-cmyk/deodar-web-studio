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

        <ol className="mt-12 grid border-y border-studio-line md:grid-cols-2">
          {studioDeliveryModel.stages.map((stage) => (
            <li
              key={stage.index}
              className="border-t border-studio-line py-7 first:border-t-0 md:px-7 md:odd:border-r md:odd:pl-0 md:even:pr-0 md:[&:nth-child(2)]:border-t-0"
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <p className="type-label text-studio-greenBright">{stage.index}</p>
                  <h3 className="type-subheading text-studio-text">{stage.title}</h3>
                </div>
                <p className="mt-4 text-base font-semibold leading-7 text-studio-textSoft">{stage.decision}</p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <p className="type-small text-studio-muted">{stage.work}</p>
                <p className="type-small border-l border-studio-line pl-4 text-studio-faint">{stage.gate}</p>
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
