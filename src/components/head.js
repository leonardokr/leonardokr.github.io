import React from 'react';
import PropTypes from 'prop-types';
import config from '@config';
import theme from '@styles/theme';
import lk from '@images/lk.png';
import favicon from '@images/favicon.ico';

const Head = ({ metadata }) => (
  <>
    <html lang="en" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="http://leonardokr.github.io/" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${config.siteUrl}og_background.png`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${config.siteUrl}og_background.png`} />
    <meta name="msapplication-TileColor" content={theme.colors.background} />
    <meta name="msapplication-TileImage" content={lk} />
    <meta name="theme-color" content={theme.colors.background} />
  </>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
