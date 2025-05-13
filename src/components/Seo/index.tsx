import { useLocation } from "react-router-dom";

import { DEFAULT_TITLE, URL } from "../../constants/seo";
import type { SeoProps } from "./types";

export const Seo = ({
  title = DEFAULT_TITLE,
  description = `
  Relatos de papel es una plataforma de compra, lectura y 
  escritura de libros en línea. Con una amplia variedad 
  de géneros y autores, ofrecemos una experiencia única para 
  los amantes de la literatura. Únete a nuestra comunidad y descubre nuevas historias cada día. 
  ¡Lee, escribe y comparte con nosotros!
  `,
  imageUrl,
}: SeoProps) => {
  const { pathname } = useLocation();

  const seo = {
    title,
    description,
    titleTemplate: `%s | ${DEFAULT_TITLE}`,
    image: imageUrl,
    url: `${URL}${pathname}`,
  };
  const formattedtitle = title
    ? seo.titleTemplate.replace("%s", title)
    : DEFAULT_TITLE;
  return (
    <>
      <title>{formattedtitle}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={URL} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content="Relatos de papel" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
    </>
  );
};
