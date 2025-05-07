import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
// import { useLocation } from 'react-router-dom'


interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
}

export const Seo=({
  title = "Relatos de papel",
  description = `
  Relatos de papel es una plataforma de compra, lectura y 
  escritura de libros en línea. Con una amplia variedad 
  de géneros y autores, ofrecemos una experiencia única para 
  los amantes de la literatura. Únete a nuestra comunidad y descubre nuevas historias cada día. 
  ¡Lee, escribe y comparte con nosotros!
  `,
  imageUrl,
}: SeoProps)=> {
  const { pathname } = useLocation();
  const url = "https://www.relatosdepapel.com/";

  const seo = {
    title,
    description,
    titleTemplate: "%s | Relatos de papel",
    image: imageUrl ,
    url: `${url}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
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


    </Helmet>
  );
}