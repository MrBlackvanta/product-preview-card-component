# Product preview card component

My solution to the [Product preview card component](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://product-preview-card-component.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/product-preview-card-component

## Built with

- React 19 and Vite
- TypeScript
- Tailwind CSS v4
- Montserrat and Fraunces from Google Fonts

## Notes

The hero is art-directed, so it's a `<picture>` with two crops. Each source carries its
own `width`/`height`, because the two variants have different aspect ratios and one set
of dimensions on the `<img>` would reserve the wrong box for whichever one loses.

Both variants are preloaded from `<head>` with a `media` attribute so the browser only
fetches the one that matches. The image lives in `public/` rather than being imported,
because a preload needs a stable URL and Vite fingerprints imported assets.

Converting the two variants from JPEG to WebP cut them roughly 60%, 45KB to 18KB on
desktop and 29KB to 12KB on mobile.

The struck-through price is `<s>` with an `aria-label`, otherwise a screen reader just
reads two prices with no indication which one you pay. The cart icon is `aria-hidden`.

Prices go through `Intl.NumberFormat` so the decimals are always right.

Path aliases needed `resolve.tsconfigPaths` in the Vite config. TypeScript's `baseUrl`
only satisfies the typechecker; the bundler resolves them separately.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
