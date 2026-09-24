import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CAP Psicología',
  tagline: 'Manual de Usuario y Guía Operativa',
  favicon: 'img/favicon.ico',

  url: 'https://tu-sitio.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  
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
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        // AQUÍ CONFIGURAMOS LA BITÁCORA DE ACTUALIZACIONES
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

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["es"],
        indexDocs: true,
        indexBlog: true, // Ahora el buscador también encontrará actualizaciones
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
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgba(255, 255, 255, 0.95)',
          dark: 'rgba(30, 30, 30, 0.95)'
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
          // AQUÍ AGREGAMOS EL ENLACE A LA BITÁCORA EN EL MENÚ SUPERIOR
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