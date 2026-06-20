import { Container } from "@/components/site/container";
import { idealClients } from "@/config/site";

export function IdealClients() {
  return (
    <section className="studio-canvas border-b border-studio-line py-[var(--studio-section-space-compact)]">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
          <p className="type-label text-studio-greenBright">{idealClients.eyebrow}</p>
          <div>
            <h2 className="type-section max-w-3xl text-studio-text">{idealClients.heading}</h2>
            <p className="type-body-lg mt-5 max-w-[var(--studio-reading-max)] text-studio-textSoft">
              {idealClients.introduction}
            </p>
          </div>
        </div>

        <ol className="mt-12 grid border-y border-studio-line lg:grid-cols-3">
          {idealClients.profiles.map((profile) => (
            <li
              className="border-t border-studio-line py-7 first:border-t-0 lg:border-l lg:border-t-0 lg:px-7 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              key={profile.index}
            >
              <p className="type-label text-studio-greenBright">{profile.index}</p>
              <h3 className="type-subheading mt-4 text-studio-text">{profile.title}</h3>
              <p className="type-small mt-4 text-studio-muted">{profile.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
