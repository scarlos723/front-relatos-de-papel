import { useLocation } from "react-router-dom";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
}
const default_title = "Relatos de papel";
export const Seo = ({
  title = default_title,
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
  const url = "https://www.relatosdepapel.com/";

  const seo = {
    title,
    description,
    titleTemplate: `%s | ${default_title}`,
    image: imageUrl,
    url: `${url}${pathname}`,
  };
  const formattedtitle = title
    ? seo.titleTemplate.replace("%s", title)
    : default_title;
  return (
    <>
      <title>{formattedtitle}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={url} />

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
