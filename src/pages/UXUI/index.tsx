import { Button } from "../../components/Button";

type TextStyle = {
  name: string;
  size: number;
  tailwind: string;
};

type  Variant = "primary" | "secondary" | "outline";
export const UxUi = () => {
  const textStyles: TextStyle[] = [
    {
      name: "Title Hero",
      size: 72,

      tailwind: "text-7xl",
    },
    {
      name: "Title Page",
      size: 48,

      tailwind: "text-5xl",
    },
    {
      name: "Subtitle",
      size: 32,
      tailwind: "text-3xl",
    },
    {
      name: "Heading",
      size: 24,

      tailwind: "text-2xl",
    },
    {
      name: "Subheading",
      size: 20,

      tailwind: "text-xl",
    },
    {
      name: "Body Base",
      size: 16,

      tailwind: "text-base",
    },
    {
      name: "Body Strong",
      size: 16,

      tailwind: "text-base font-semibold",
    },
    {
      name: "Body Emphasis",
      size: 16,

      tailwind: "text-base italic",
    },
    {
      name: "Body Link",
      size: 16,

      tailwind: "text-base text-blue-500 underline",
    },
    {
      name: "Body Small",
      size: 14,

      tailwind: "text-sm ",
    },
    {
      name: "Body Small Strong",
      size: 14,

      tailwind: "text-sm font-semibold",
    },
    {
      name: "Body Code",
      size: 16,

      tailwind: "text-base font-mono",
    },
  ];

  const button_variants:Variant[]= [
    "primary",
    "secondary",
    "outline",
  ];
  return (
    <main className="container py-10">
      <section>
        <h2 className="text-5xl font-bold mb-10">Font sizes</h2>
        <ul className="grid lg:grid-cols-2 gap-4">
          {textStyles.map((style) => (
            <li key={style.name} className="border-b border-gray-700 pb-2">

              <div className={`${style.tailwind}`}>
                {style.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">
              Size: {style.size}px Tailwind: <code className="text-green-400">{style.tailwind}</code>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-5xl font-bold mb-10">Buttons</h2>
        <p className="mb-4">
          <span className="font-bold">size prop:  </span> sm, md, lg
        </p>
        <div className="grid lg:grid-cols-2 gap-4">
          {
            button_variants.map((variant) => (
              <div key={variant} className="border-b border-gray-700 pb-2">
                <Button variant={variant} size="lg" className="w-full">
                  {variant}
                </Button>
                <div className="text-xs text-gray-500 mt-1">
                  <code className="text-green-400">{`<Button variant="${variant} size:"lg"> ...`}</code>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  );
};
