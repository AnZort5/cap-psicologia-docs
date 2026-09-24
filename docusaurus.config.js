import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CAP Psicología',
  tagline: 'Manual de Usuario y Guía Operativa',
  favicon: 'img/favicon.ico',

  url: 'https://tu-sitio.com',
  baseUrl: '/',

  onBrokenLinks: 'ignore', // Cambiado a 'ignore' para que Vercel no falle si hay un enlace mal puesto
  
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false, // Apagado temporalmente para evitar problemas de Git en Vercel
          breadcrumbs: true,
        },
        blog: {
          routeBasePath: 'actualizaciones',
          showReadingTime: false,
          blogTitle: 'Actualizaciones del Sistema',
          blogDescription: 'Registro de nuevas funciones y correcciones en el sistema web del CAP.',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Historial de Versiones',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Eliminamos el plugin de Zoom temporalmente

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["es"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: "/docs",
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'CAP Psicología',
        hideOnScroll: true,
        logo: {
          alt: 'CAP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Ingresar al Manual',
          },
          {
            to: '/actualizaciones', 
            label: '🔄 Actualizaciones del Sistema', 
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Centro de Atención Permanente (CAP), Quetzaltenango.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;