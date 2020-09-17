import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/index',
          routes: [
            {
              path: '/list',
              component: '../pages/home/List/index',
            },
            {
              path: '/imageList',
              component: '../pages/home/ImageList/index',
            },
            {
              path: '/tagList',
              component: '../pages/home/TagList/index',
            },
            {
              path: '/ellipis',
              component: '../pages/home/Ellipis/index',
            },
            {
              path: '/study',
              component: '../pages/study/index',
            },
            {
              path: '/expandTable',
              component: '../pages/home/ExpandTable/index',
            },
          ],
        },
      ],
    },
  ],
  dva: {},
  antd: {},
  base: '/Components/',
  publicPath: '/Components/',
  plugins: ['umi-plugin-gh-pages'],
  proxy: {
    '/api/': {
      target: 'https://pvp.qq.com/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '' },
    },
  },
});
