import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

import siteMetaData from "../config/siteData";

function SEO({ canonical, pageDescription, pageTitle }) {
  const { pathname } = useLocation();
  const { title, description, siteUrl, imageUrl, twitter, } = siteMetaData();

  const metaTitle = pageTitle ? `${pageTitle} | ${title}` : title;
  const metaDescription = pageDescription || description;

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta name="robots" content="index,follow" />
      <meta name="author" content={title} />
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={imageUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imageUrl} />
      <meta itemprop="name" content={metaTitle} />
      <meta itemprop="description" content={metaDescription} />
      <meta itemprop="image" content={imageUrl} />
      {canonical && <link rel="canonical" href={`${siteUrl}${pathname}`} />}
    </Helmet>
  );
}

SEO.propTypes = {
  canonical: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
