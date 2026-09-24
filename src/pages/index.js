import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ backgroundColor: '#1A5276' }}>
      <div className="container">
        <h1 className="hero__title" style={{ color: 'white' }}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{ color: 'white' }}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Consultar Manual
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio | ${siteConfig.title}`}
      description="Documentación técnica y manual operativo del sistema web para el Área de Psicología del CAP.">
      <HomepageHeader />
      <main>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2>Centro de Soporte y Capacitación</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#4a4a4a' }}>
            Plataforma de documentación oficial para el manejo del sistema de expedientes y agenda clínica. Seleccione un módulo en el menú superior para acceder a las guías de procedimientos.
          </p>
        </div>
      </main>
    </Layout>
  );
}