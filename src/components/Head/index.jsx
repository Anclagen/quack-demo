import { Helmet } from "react-helmet-async";

/**
 * Update index.html meta tags
 * @param {String} title Current pages title
 * @param {String} description  Description of pages content
 * @example
 *  <Head title="Home" description="Welcome to TechBeauty"/>
 */

const Head = function ({ title, description, keywords = [] }) {
  return (
    <Helmet>
      <title>{title + " | Quack Specialists"}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
    </Helmet>
  );
};

export default Head;
