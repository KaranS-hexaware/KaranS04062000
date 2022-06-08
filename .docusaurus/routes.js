import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '68b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '58a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'df0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '356'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0e5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6c0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f35'),
    exact: true
  },
  {
    path: '/accelarator',
    component: ComponentCreator('/accelarator', '402'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2e'),
    exact: true
  },
  {
    path: '/blog/2016/03/11/blog-post',
    component: ComponentCreator('/blog/2016/03/11/blog-post', '03b'),
    exact: true
  },
  {
    path: '/blog/2017/04/10/blog-post-two',
    component: ComponentCreator('/blog/2017/04/10/blog-post-two', '4b3'),
    exact: true
  },
  {
    path: '/blog/2017/09/25/testing-rss',
    component: ComponentCreator('/blog/2017/09/25/testing-rss', 'ab0'),
    exact: true
  },
  {
    path: '/blog/2017/09/26/adding-rss',
    component: ComponentCreator('/blog/2017/09/26/adding-rss', '1ff'),
    exact: true
  },
  {
    path: '/blog/2017/10/24/new-version-1.0.0',
    component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0', 'b5a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '8fb'),
    exact: true
  },
  {
    path: '/industryspecificsolution',
    component: ComponentCreator('/industryspecificsolution', '97a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b0a'),
    exact: true
  },
  {
    path: '/product',
    component: ComponentCreator('/product', '58a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a5b'),
    routes: [
      {
        path: '/docs/doc1',
        component: ComponentCreator('/docs/doc1', 'a85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/doc2',
        component: ComponentCreator('/docs/doc2', '165'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/doc3',
        component: ComponentCreator('/docs/doc3', '2da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/doc4',
        component: ComponentCreator('/docs/doc4', '5d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/doc5',
        component: ComponentCreator('/docs/doc5', '01a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '662'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
