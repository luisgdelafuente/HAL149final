import React from 'react';
import { useT } from '../contexts/LanguageContext';
import { pathsFor, routeFor } from '../utils/routes';
import { contactPageLd } from '../utils/seo';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactAside } from '../components/contact/ContactAside';

export function Contact() {
  const { t, lang } = useT();
  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.contact.title, path: routeFor(lang, 'contact') }];


  return (
    <>
      <Seo title={t.contact.metaTitle} description={t.contact.metaDescription} paths={pathsFor('contact')} breadcrumbs={crumbs} jsonLd={[contactPageLd(lang)]} />
      <PageHeader crumbs={crumbs} title={t.contact.title} intro={t.contact.intro} />
      <div className="shell grid gap-12 pb-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactAside />
        </div>
      </div>
    </>);

}