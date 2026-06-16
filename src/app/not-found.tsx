import { ActionLink } from "@/components/site/action-link";
import { Container } from "@/components/site/container";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="studio-canvas min-h-[70vh] border-b border-studio-line py-[var(--studio-section-space)]">
        <Container size="content">
          <p className="type-label text-studio-greenBright">404</p>
          <h1 className="type-display-lg mt-6 text-studio-text">Page not found</h1>
          <p className="type-body-lg mt-6 max-w-[var(--studio-reading-max)] text-studio-textSoft">
            The page may have moved, or the address may be incorrect.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink href="/">Return home</ActionLink>
            <ActionLink href="/engagements" variant="secondary">
              Review engagements
            </ActionLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
