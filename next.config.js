/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {

    output: 'export',
    webpack: (config, { isServer }) => {
        // Configura webpack aquí
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            and: [/\.(js|ts|jsx|tsx)$/],
          },
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
  };
  

module.exports = nextConfig


