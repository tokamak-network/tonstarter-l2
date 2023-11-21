/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['**'],
      },
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tonstarter-symbols.s3.ap-northeast-2.amazonaws.com',
          port: '',
          pathname: '**',
        },
      ],
}

module.exports = nextConfig
