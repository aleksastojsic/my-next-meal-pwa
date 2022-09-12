/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
  fallbacks: {
    // image: '/static/images/fallback.png'
    // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  }
});

module.exports = withPWA({
  images: {
    domains: ['www.themealdb.com']
  },
  reactStrictMode: true
});
