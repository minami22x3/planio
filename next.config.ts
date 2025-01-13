import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default withSentryConfig(nextConfig, {
  org: 'minami22x3',
  project: 'planiox',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: '/monitoring',
  disableLogger: true,
  automaticVercelMonitors: true,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
