import { ProductPreviewCard } from "components";

export default function App() {
  return (
    <div className="bg-cream grid min-h-dvh w-full grid-rows-[1fr_auto]">
      <main className="mt-9 w-full max-w-87.5 place-self-center md:max-w-150">
        <ProductPreviewCard />
      </main>
      <footer className="text-preset-5 mt-auto w-full pb-4 text-center text-black">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </footer>
    </div>
  );
}
