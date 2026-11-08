import React from 'react';
import { useT } from '../contexts/LanguageContext';
import { pathsFor } from '../utils/routes';
import { Seo } from '../components/Seo';
import { LostInSpace } from '../components/LostInSpace';

export function NotFound() {
  const { t } = useT();
  return (
    <>
      <Seo title={t.notFound.metaTitle} description={t.notFound.metaDescription} paths={pathsFor('home')} noindex />
      <LostInSpace />
    </>);

}