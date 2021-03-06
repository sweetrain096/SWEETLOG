// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      {/* <meta name="google-site-verification" content="tqJ5CTRVzlxtY-rn0ACl7LdGIaXvFYoIIf6P61K3_J0" /> */}
      {/* 변경사항 */}
      <meta name="google-site-verification" content="au8g6fNCN4vLVwHlvyiojCLD85xNQOOO7ZMaSHNtolw" />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <script data-ad-client="ca-pub-4161990653902092" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Helmet>
    {children}
  </div>
);

export default Layout;
