import React from 'react';
import { useT } from '../contexts/LanguageContext';
import { legalNotice } from '../data/legal';
import { pathsFor, routeFor } from '../utils/routes';
import { Seo } from '../components/Seo';
import { LegalDocument } from '../components/legal/LegalDocument';

export function LegalNotice() {
  const { t, lang } = useT();
  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.legal.notice.title, path: routeFor(lang, 'legalNotice') }];

  return (
    <>
      <Seo title={t.legal.notice.title} description={t.legal.notice.metaDescription} paths={pathsFor('legalNotice')} breadcrumbs={crumbs} />
      <LegalDocument title={t.legal.notice.title} doc={legalNotice} crumbs={crumbs} />
    </>);

}