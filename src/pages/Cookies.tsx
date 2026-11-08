import React from 'react';
import { useT } from '../contexts/LanguageContext';
import { cookiePolicy } from '../data/legal';
import { pathsFor, routeFor } from '../utils/routes';
import { Seo } from '../components/Seo';
import { LegalDocument } from '../components/legal/LegalDocument';

export function Cookies() {
  const { t, lang } = useT();
  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.legal.cookies.title, path: routeFor(lang, 'cookies') }];

  return (
    <>
      <Seo title={t.legal.cookies.title} description={t.legal.cookies.metaDescription} paths={pathsFor('cookies')} breadcrumbs={crumbs} />
      <LegalDocument title={t.legal.cookies.title} doc={cookiePolicy} crumbs={crumbs} />
    </>);

}