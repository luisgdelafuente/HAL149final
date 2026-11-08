import React from 'react';
import { useT } from '../contexts/LanguageContext';
import { pathsFor, routeFor } from '../utils/routes';
import { profilePageLd } from '../utils/seo';
import { Seo } from '../components/Seo';
import { AboutIntro } from '../components/about/AboutIntro';
import { MissionLog } from '../components/about/MissionLog';
import { AboutDetails } from '../components/about/AboutDetails';
import { ContactBand } from '../components/ContactBand';

export function About() {
  const { t, lang } = useT();
  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.about.title, path: routeFor(lang, 'about') }];


  return (
    <>
      <Seo
        title={t.about.metaTitle}
        description={t.about.metaDescription}
        paths={pathsFor('about')}
        type="profile"
        breadcrumbs={crumbs}
        jsonLd={[profilePageLd(lang)]} />
      
      <AboutIntro crumbs={crumbs} />
      <MissionLog />
      <AboutDetails />
      <ContactBand />
    </>);

}