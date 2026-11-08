import React from 'react';
import { useT } from '../contexts/LanguageContext';
import { pathsFor } from '../utils/routes';
import { Seo } from '../components/Seo';
import { Hero } from '../components/home/Hero';
import { Manifesto } from '../components/home/Manifesto';
import { LatestTransmissions } from '../components/home/LatestTransmissions';
import { TopicConstellation } from '../components/home/TopicConstellation';
import { SelectedProjects } from '../components/home/SelectedProjects';
import { SignalSubscribe } from '../components/home/SignalSubscribe';
import { ContactBand } from '../components/ContactBand';

export function Home() {
  const { t } = useT();
  return (
    <>
      <Seo description={t.meta.siteDescription} paths={pathsFor('home')} />
      <Hero />
      <Manifesto />
      <LatestTransmissions />
      <TopicConstellation />
      <SelectedProjects />
      <SignalSubscribe />
      <ContactBand />
    </>);

}