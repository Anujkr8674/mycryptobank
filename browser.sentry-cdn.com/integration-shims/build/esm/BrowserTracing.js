import {
    defineIntegration,
    consoleSandbox
} from '@sentry/core';

/**
 * This is a shim for the BrowserTracing integration.
 * It is needed in order for the CDN bundles to continue working when users add/remove tracing
 * from it, without changing their config. This is necessary for the loader mechanism.
 */
const browserTracingIntegrationShim = defineIntegration((_options) => {
    consoleSandbox(() => {
        // eslint-disable-next-line no-console
        console.warn('You are using browserTracingIntegration() even though this bundle does not include tracing.');
    });

    return {
        name: 'BrowserTracing',
    };
});

export {
    browserTracingIntegrationShim
};
//# sourceMappingURL=BrowserTracing.js.map