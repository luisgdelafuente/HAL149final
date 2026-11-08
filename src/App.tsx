import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import { brand, languages } from './brand';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })));
const Topics = lazy(() => import('./pages/Topics').then((m) => ({ default: m.Topics })));
const Topic = lazy(() => import('./pages/Topic').then((m) => ({ default: m.Topic })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const LegalNotice = lazy(() => import('./pages/LegalNotice').then((m) => ({ default: m.LegalNotice })));
const Privacy = lazy(() => import('./pages/Privacy').then((m) => ({ default: m.Privacy })));
const Cookies = lazy(() => import('./pages/Cookies').then((m) => ({ default: m.Cookies })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

/** All EN + ES routes, generated from the localized segments in brand.ts. */
export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <MotionConfig reducedMotion="user">
              <Routes>
                <Route element={<Layout />}>
                  {languages.map((lang) => {
                    const r = brand.routes[lang];
                    return (
                      <React.Fragment key={lang}>
                        <Route path={r.home} element={<Home />} />
                        <Route path={r.blog} element={<Blog />} />
                        <Route path={`${r.blog}/:slug`} element={<BlogPost />} />
                        <Route path={r.topics} element={<Topics />} />
                        <Route path={`${r.topics}/:slug`} element={<Topic />} />
                        <Route path={r.about} element={<About />} />
                        <Route path={r.contact} element={<Contact />} />
                        <Route path={r.legalNotice} element={<LegalNotice />} />
                        <Route path={r.privacy} element={<Privacy />} />
                        <Route path={r.cookies} element={<Cookies />} />
                      </React.Fragment>);

                  })}
                  <Route path="/es/*" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </MotionConfig>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>);

}