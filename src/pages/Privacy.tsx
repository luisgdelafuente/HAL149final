import React from 'react';
import { useT } from '../contexts/LanguageContext';
import { privacyPolicy } from '../data/legal';
import { pathsFor, routeFor } from '../utils/routes';
import { Seo } from '../components/Seo';
import { LegalDocument } from '../components/legal/LegalDocument';

export function Privacy() {
  const { t, lang } = useT();
  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.legal.privacy.title, path: routeFor(lang, 'privacy') }];

  return (
    <>
      <Seo title={t.legal.privacy.title} description={t.legal.privacy.metaDescription} paths={pathsFor('privacy')} breadcrumbs={crumbs} />
      <LegalDocument title={t.legal.privacy.title} doc={privacyPolicy} crumbs={crumbs} />
    </>);

}