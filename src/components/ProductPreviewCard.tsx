import { CartSVG } from "assets";
import { productPreviewCardData } from "data";

export default function ProductPreviewCard() {
  const { image, category, title, description, price } = productPreviewCardData;
  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const fmtPrice = (price: number) => fmt.format(price);

  return (
    <figure className="flex flex-col overflow-hidden rounded-lg bg-white md:flex-row">
      <picture className="md:w-1/2">
        <source
          srcSet={image.desktop}
          media="(min-width: 768px)"
          width={600}
          height={900}
        />
        <img
          src={image.mobile}
          alt={image.alt}
          className="h-full w-full object-cover"
          width={686}
          height={480}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <figcaption className="text-grey grid gap-6 p-8 md:w-1/2">
        <p className="text-preset-4 uppercase">{category}</p>
        <h1 className="text-preset-1 text-black">{title}</h1>
        <p className="text-preset-3">{description}</p>
        <div className="flex items-center gap-4">
          <span className="text-preset-1 text-green-500">
            <span className="sr-only">Discounted price: </span>
            {fmtPrice(price.current)}
          </span>
          <s className="text-preset-5 text-grey">
            <span className="sr-only">Original price: </span>
            {fmtPrice(price.original)}
          </s>
        </div>
        <button className="btn-primary" type="button">
          <CartSVG className="size-4.5" aria-hidden="true" />
          Add to Cart
        </button>
      </figcaption>
    </figure>
  );
}
