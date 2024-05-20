/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Etheirystech',
    description: 'Etheirystech Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://etheirystech.github.io/kasm-registry/',
    contactUrl: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
