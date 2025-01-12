import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await import('./sentry.client.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;