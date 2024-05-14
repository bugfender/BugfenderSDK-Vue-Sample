# Bugfender

[Bugfender](https://bugfender.com) is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

## Bugfender SDK Vue Sample

This repository contains a sample Vue application with Bugfender SDK to collect user logs.

### Running the app

To run the sample:

- `npm ci`: install dependencies
- `npm run dev`: run example dev server

## Links

- [Official Vue SDK Docs](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-vue)
- [Bugfender JS SDK reference documentation](https://js.bugfender.com/)

If you plan to use Bugfender SDK with another JavaScript framework, check the following documentation:

- [Vanilla JavaScript](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-javascript-on-browsers/): Bugfender SDK for browsers
- [Angular](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-angular/): Bugfender SDK for Angular
- [React](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-react/): Bugfender SDK for React
- [Svelte](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-svelte/): Bugfender SDK for Svelte

## Bugfender Quick Start Guide

To get Bugfender working on your apps, you will need to:

- Get an app key at [bugfender.com](https://bugfender.com/)
- `npm i @bugfender/sdk`. Install SDK npm package.
- Once initialized, you're ready to use it:

    ```typescript
    // See: `src/main.ts`
    // Initialize: `appKey` is the only required option
    import { Bugfender } from '@bugfender/sdk'

    Bugfender.init({
        appKey: '<YOUR_APP_KEY_HERE>',
        // apiURL: 'https://api.bugfender.com',
        // baseURL: 'https://dashboard.bugfender.com',
        // deviceName: '',
        // overrideConsoleMethods: true,
        // printToConsole: true,
        // registerErrorHandler: true,
        // logBrowserEvents: true,
        // logUIEvents: true,
        // version: '',
        // build: '',
    })

    // See: `src/App.vue`
    // Later on your code Bugfender can be used
    import { Bugfender } from '@bugfender/sdk'

    Bugfender.log('Hello world!');
    ```

    **⚠️ Remember to change `<YOUR_APP_KEY_HERE>`** with the app key of your app. It's also recommended to add version & build numbers.