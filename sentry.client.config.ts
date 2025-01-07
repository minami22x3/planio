import * as Sentry from '@sentry/nextjs';

Sentry.init({
  enabled: process.env.NODE_ENV !== 'development',
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENV,
  tracesSampleRate: process.env.NEXT_PUBLIC_SENTRY_ENV === 'production' ? 0.15 : 0,
  sampleRate: process.env.NEXT_PUBLIC_SENTRY_ENV === 'production' ? 0.2 : 0,
  debug: false,
});
