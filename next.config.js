/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true,
        typedRoutes:true
    },
    async rewrites() {
        return [
          {
            source: '/sitemap.xml',
            destination: '/sitemap.xml',
          },
        ];
      },
}

module.exports = nextConfig
