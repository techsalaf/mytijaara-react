const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['simplebar-react'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**', // allows all https domains
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**', // allows all https domains
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Ignore all core-js imports from simplebar
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'core-js/modules/es.parse-int.js': false,
      'core-js/modules/es.object.assign.js': false,
      'core-js/modules/es.array.filter.js': false,
      'core-js/modules/es.object.to-string.js': false,
      'core-js/modules/es.array.iterator.js': false,
      'core-js/modules/es.string.iterator.js': false,
      'core-js/modules/es.weak-map.js': false,
      'core-js/modules/web.dom-collections.iterator.js': false,
      'core-js/modules/es.array.reduce.js': false,
      'core-js/modules/es.regexp.exec.js': false,
      'core-js/modules/es.string.match.js': false,
      'core-js/modules/es.function.name.js': false,
      'core-js/modules/es.string.replace.js': false,
    };

    // Exclude form-data and related packages from client bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'form-data': false,
        'call-bind-apply-helpers': false,
        'dunder-proto': false,
        'get-proto': false,
        'get-intrinsic': false,
        'es-set-tostringtag': false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "bjorn66.com",
//       "mytijaara-test.6amdev.xyz",
//       "192.168.50.168",
//       "mytijaara-dev.6amdev.xyz",
//     ], // Add the domain here
//   },
// };
//
// module.exports = nextConfig;
