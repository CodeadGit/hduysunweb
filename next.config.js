/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true,
        typedRoutes:true,
    },
    images: {
        domains: ["firebasestorage.googleapis.com"]
      },
}

module.exports = nextConfig
